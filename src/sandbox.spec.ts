import { TodoRepository } from "./svc/todo-repository"
import { TodoCtl } from "./toto-ctl"
import { Test } from '@nestjs/testing'
import { AProvider } from "./di/a-provider"
import HelloValueProvider from "./di/hello-provider"


describe('TodoCtl isolated', () => {

    let svc: TodoRepository
    let ctl: TodoCtl

    beforeEach(async () => {
        svc = new TodoRepository()
        ctl = new TodoCtl(svc, 'W', 'T',)
    })

    describe('ok', () =>
    it('should return ok', () =>
    expect('ok').toBe('ok')  ))

    describe('a', () =>
    it('should return A', () => {
        expect(ctl.get_a()).toBe('WT')
    }))

    describe('list', () =>
    it('should return an array of todos', async () => {
        let result = [ { title: 'Save money' } ]
        jest.spyOn(svc, 'list').mockImplementation(async () => result)
        expect(await ctl.list()).toBe(result)
    }))

})

describe('TodoCtl', () => {

    let svc: TodoRepository
    let ctl: TodoCtl

    beforeEach(async () => {
        let module = await Test.createTestingModule({
            controllers: [TodoCtl],
            providers: [TodoRepository,
                        {
                            provide: HelloValueProvider,
                            useValue: new Object({ value: 'A' })
                        },
                        AProvider,
                        {
                            provide: 'Options',
                            useValue: 'T'
                        },]
        }).compile()
        svc = module.get<TodoRepository>(TodoRepository)
        ctl = module.get<TodoCtl>(TodoCtl)
    })

    describe('ok', () =>
    it('should return ok', () =>
    expect('ok').toBe('ok')  ))

    describe('a', () =>
    it('should return A', () => {
        expect(ctl.get_a()).toBe('AT')
    }))

    describe('list', () =>
    it('should return an array of todos', async () => {
        let result = [ { title: 'Save money' } ]
        jest.spyOn(svc, 'list').mockImplementation(async () => result)
        expect(await ctl.list()).toBe(result)
    }))

})
