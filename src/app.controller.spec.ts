import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TodoCtl } from './toto-ctl';
import { TodoRepository } from './svc/todo-repository';
import { ITodo } from './model/itodo';
import { AProvider } from './di/a-provider';
import HelloValueProvider from './di/hello-provider';
import { DatetimeService } from './datetime.service';


describe('AppController', () => {
    let appController: AppController

    beforeEach(async () => {
    const app: TestingModule =
    await Test
          .createTestingModule({
            controllers: [AppController, TodoCtl],
            providers: [AppService,
                        {
                            provide: TodoRepository,
                            useValue: new (class _ extends TodoRepository{
                                protected readonly items: ITodo[] = [ { title: 'Buy milk and tea' } ]
                            })()
                        },
                        {
                            provide: 'Options',
                            useValue: '!!!'
                        },
                        AProvider,
                        HelloValueProvider,
                        DatetimeService, ] })
          .compile()

    appController = app.get<AppController>(AppController)  })

    describe('ok', () => it('should return true', () => expect(true).toBe(true)))
    /*
    describe('index',
             () => it('should return "Hello World!"',
                      () => expect(appController.index()).toBe('index')))
    */
})
