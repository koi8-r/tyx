import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatetimeService } from './datetime.service'
import { TodoCtl } from './toto-ctl'
import { AcceptsMid } from './middleware/accepts.mid'
import { TodoRepository } from './svc/todo-repository'
import { AProvider } from './di/a-provider'
import HelloValueProvider from './di/hello-provider'
import { ITodo } from "src/model/itodo"


@Module({
    imports: [],
    controllers: [AppController, TodoCtl],
    providers: [AppService,
                {
                    provide: TodoRepository,
                    // useClass injected and instantiated by engine
                    // useClass: TodoRepository,
                    // useValue needs instance object
                    useValue: new (class _ extends TodoRepository{
                        protected readonly items: ITodo[] = [ { title: 'Buy milk and tea' } ]
                    })()
                },
                // resolved provider
                {
                    provide: 'Options',
                    useValue: '!!!'
                },
                AProvider,
                HelloValueProvider,
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
