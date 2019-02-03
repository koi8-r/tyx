import { Controller, Get, Post, Body, HttpException, HttpStatus, UseFilters } from "@nestjs/common"
import { Todo } from "./model/todo"
import { HttpErrorFilter } from "./err-filter";


@UseFilters(HttpErrorFilter)
@Controller('/todo')
export class TodoCtl {

    constructor() {}

    @Get()
    list() : Promise<Todo[]> {
        return Promise.resolve([])
    }

    @Post()
    create(@Body() dto : Todo ) : void {

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
