import { Controller, Get } from '@nestjs/common'
import { DatetimeService } from './datetime.service'
import { UserController, IUser } from './me.controller'


@Controller('/')
export class AppController {
    constructor(private readonly datetimeService: DatetimeService) {}

    @Get()
    index(): string {
        return 'index'
    }

    @Get('/datetime')
    datetime() : string {
        return this.datetimeService.ISO
    }

    @Get('me')
    user() : IUser {
        return new UserController().user()
    }
}
