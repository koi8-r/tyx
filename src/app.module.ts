import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatetimeService } from './datetime.service'
import { TodoCtl } from './toto-ctl'
import { AcceptsMid } from './middleware/accepts.mid'
import { TodoRepository } from './svc/todo-repository'
import { TodoMongooseRepository } from './svc/todo-mongoose-repository'
import { AProvider } from './di/a-provider'
import HelloValueProvider from './di/hello-provider'
import { ITodo } from "src/model/itodo"
import { MongooseModule } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'


// ITodo in fact
const TodoSchema = new mongoose.Schema({
    title: String
})


@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/tyx',{
                                     useNewUrlParser: true }),
              // register feature for separate modules
              MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]) ],
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
                TodoMongooseRepository,
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
