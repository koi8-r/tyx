import { ExceptionFilter, HttpException, Catch, ArgumentsHost } from "@nestjs/common"
import { HttpArgumentsHost } from "@nestjs/common/interfaces"


@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {  // extends BaseExceptionFilter
    // constructor(@Inject(HTTP_SERVER_REF) applicationRef: HttpServer) => super(applicationRef)
    catch(ex: HttpException, host: ArgumentsHost) {
        // original handler function arguments
        let args: HttpArgumentsHost = host.switchToHttp()
        args.getResponse()
            .status(ex.getStatus())
            .send(ex.message)  }
}
