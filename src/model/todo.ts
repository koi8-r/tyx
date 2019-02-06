import { ITodo } from "./itodo"
import { IsString } from 'class-validator'


export class TodoDto implements ITodo {
    constructor(title: string) {}

    @IsString()
    readonly title: string
}
