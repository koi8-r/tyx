import { Injectable, Inject } from "@nestjs/common"
import { ITodo } from "src/model/itodo"
import { InjectModel } from "@nestjs/mongoose";
import { Model, Document } from "mongoose";


type TTodo = ITodo & Document
interface Todo extends TTodo {}


@Injectable()
export class TodoMongooseRepository {

    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

    async list() : Promise<ITodo[]> {
        return this.todoModel.find().exec()
    }

    async create(dto: ITodo) : Promise<ITodo> {
        return new this.todoModel(dto).save()
    }
}
