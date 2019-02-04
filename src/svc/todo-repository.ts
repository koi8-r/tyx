import { Injectable } from "@nestjs/common"
import { ITodo } from "src/model/itodo"
import { TodoDto } from "src/model/todo"


@Injectable()
export class TodoRepository {

    private readonly items: ITodo[] = [ { title: 'Buy milk' } ]

    async list() : Promise<ITodo[]> { return this.items }

    async create(item: TodoDto) : Promise<ITodo> {
        this.items.push(item)
        return item
    }

}
