import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatetimeService } from './datetime.service'
import { TodoCtl } from './toto-ctl'
import { AcceptsMid } from './middleware/accepts.mid'
import { TodoRepository } from './svc/todo-repository'
import { AProvider } from './di/a-provider'

@Module({
    imports: [],
    controllers: [AppController, TodoCtl],
    providers: [AppService,
                TodoRepository,
                AProvider,
                DatetimeService, /*{
                    provide: APP_FILTER,
                    useClass: HttpErrorFilter
                }*/],
})
export class AppModule implements NestModule {
    // app.use(mid)
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AcceptsMid)  // []
                .with('state')
                .forRoutes(TodoCtl)
                // .forRoutes('todo')  // { path: 'todo', method: RequestMethod.ALL }
    }
}
