import { TodoMongooseRepository } from "./svc/todo-mongoose-repository"
import { Test } from '@nestjs/testing'
import { getModelToken } from '@nestjs/mongoose'
import { Schema, Model, model } from 'mongoose'


describe('TodoMongooseRepository', () => {

    let svc: TodoMongooseRepository

    beforeEach(async () => {
        let module = await Test.createTestingModule({
            providers: [ TodoMongooseRepository,
                         {
                            provide: getModelToken('Todo'),
                            useValue: {}  // model is not used
                         }]
        }).compile()
        svc = module.get<TodoMongooseRepository>(TodoMongooseRepository)
    })

    describe('list', () =>
    it('should return an array of todos', async () => {
        let result = [ { title: 'Save money' } ]
        jest.spyOn(svc, 'list').mockImplementation(async () => result)
        expect(await svc.list()).toBe(result)
    }))

})
