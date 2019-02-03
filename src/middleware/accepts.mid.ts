import { NestMiddleware, Injectable, MiddlewareFunction } from "@nestjs/common"



@Injectable()
export class AcceptsMid implements NestMiddleware {
    async resolve(... state : any[]): Promise<MiddlewareFunction> {
        return async (req, res, next) => {
            next()
        }
    }
}
