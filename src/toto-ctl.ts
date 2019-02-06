import { Controller, Get, Post, Body, HttpException, HttpStatus, UseFilters, Inject } from "@nestjs/common"
import { ITodo } from "./model/itodo"
import { TodoDto } from "./model/todo"
import { HttpErrorFilter } from "./err-filter";
import { TodoRepository } from './svc/todo-repository'


@UseFilters(HttpErrorFilter)
@Controller('/todo')
export class TodoCtl {

    constructor(private readonly repository: TodoRepository,
                @Inject('A') private readonly a: string) {}

    @Get('/a')
    get_a() {
        return this.a
    }

    @Get()
    async list() : Promise<ITodo[]> {
        return this.repository.list()
    }

    @Post()
    create(@Body() dto : TodoDto ) : void {
        this.repository.create(dto)
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
