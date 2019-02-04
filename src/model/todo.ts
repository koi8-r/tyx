import { ITodo } from "./itodo"
import { isString } from 'class-validator'


export class TodoDto implements ITodo {
    constructor(title: string) {}

    @isString()
    readonly title: string
}
