import { IsString, validate, ValidationError } from 'class-validator'
import { plainToClass } from 'class-transformer'


interface ITodo {
    title: string
}

class Todo implements ITodo {
    constructor(title: string) {
        this.title = title
    }

    @IsString()
    readonly title: string
}

let todo = plainToClass(Todo, { title: null })

validate(todo)
.then(res => { throw res.pop() })
.catch((ex: ValidationError) => console.error(ex.toString()))
