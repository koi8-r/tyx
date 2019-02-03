import { Controller, Get } from '@nestjs/common'
import { Req, Res, Headers, Body } from '@nestjs/common'
import { Response, Request } from 'express'
import { DatetimeService } from './datetime.service'
import { UserController, IUser } from './me.controller'
import { Observable, of } from 'rxjs';


@Controller('/')
export class AppController {
    constructor(private readonly datetimeService : DatetimeService) {}

    @Get()
    index() : string {
        return 'index'
    }

    @Get('/datetime')
    datetime() : string {
        return this.datetimeService.ISO
    }

    @Get('me')
    user() : IUser {
        return new UserController().me()
    }

    @Get('name')
    raw(@Req() req : Request,
        @Res() res : Response,
        @Headers('accept') accept : string)
        : void {

        console.assert(accept === req.headers['accept'])
        res.send('admin')
    }

    @Get('rx')
    rx() : Observable<any[]> {
        return of([1, 2, 3])
    }

}
