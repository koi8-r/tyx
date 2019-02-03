import { ExceptionFilter, HttpException, Catch, ArgumentsHost } from "@nestjs/common"


@Catch(HttpException)
export class HttpErrorFilter implements ExceptionFilter {  // extends BaseExceptionFilter
    // constructor(@Inject(HTTP_SERVER_REF) applicationRef: HttpServer) => super(applicationRef)
    catch(ex: HttpException, host: ArgumentsHost) {
        host.switchToHttp()
            .getResponse()
            .status(ex.getStatus())
            .send(ex.message)  }
}
