import { Controller, Get, Post, Body, HttpException, HttpStatus, UseFilters, Inject, OnModuleInit, UsePipes, Param, ParseIntPipe } from "@nestjs/common"
import { ITodo } from "./model/itodo"
import { TodoDto } from "./model/todo"
import { HttpErrorFilter } from "./err-filter";
import { TodoRepository } from './svc/todo-repository'
import { ModuleRef } from "@nestjs/core";
import { ModuleMetadata } from "@nestjs/common/interfaces";
import { Nothing, ValidatePipe } from "./nothing-deco";
import { IdentifyPipe } from "./identify-pipe";


@Controller('/todo')
@UseFilters(HttpErrorFilter)
export class TodoCtl implements OnModuleInit {

    constructor(@Inject(TodoRepository)
                private readonly repository: TodoRepository,
                @Inject('A')
                private readonly a: string,
                @Inject('Options')
                private readonly opt: string,
                private readonly moduleRef?: ModuleRef) {}

    onModuleInit() {
        // let a = this.moduleRef.get('A')
    }

    @Get('/nothing')
    nothing(@Nothing(this, /*new ValidatePipe()*/) nothing: string) {
        return nothing
    }

    @Get('/a')
    get_a() {
        return this.a + this.opt
    }

    @Get()
    async list() : Promise<ITodo[]> {
        return this.repository.list()
    }

    @Post()
    // async create(@Body(new ValidationPipe({ transform: true, forbidNonWhitelisted: true, forbidUnknownValues: true })) dto: TodoDto) {
    // @UsePipes(new IdentifyPipe(TodoDto))
    create(@Body(new IdentifyPipe(TodoDto)) dto : ITodo ) : void {
        this.repository.create(dto)
    }

    @Get(':id')
    async get(@Param('id', ParseIntPipe) id: number,
              // @Param('id', UserEntityPipe) user: userEntity
          ) : Promise<ITodo> {
        return new TodoDto(id.toString())
    }

    @Get('/403')
    @UseFilters(HttpErrorFilter)
    err403() {
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN)
    }

    @Get('/418')
    err418() {
        throw new HttpException('Tea', HttpStatus.I_AM_A_TEAPOT)
    }
}
