import { Controller, Get } from '@nestjs/common'


export interface IUser {
    id?: number
    login: string
}

@Controller()
export class UserController {
    @Get('/')
    /*
      request mapping decorator sets path & method metadata on this handler:

      Controller: target.constructor.name
      Path: key
      Handler: descriptor.value
    */
    user() : IUser {
        return {
            login: 'anonymous'
        }
    }
}
