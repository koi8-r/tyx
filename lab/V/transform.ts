import { plainToClass, Type, Expose, Exclude } from 'class-transformer'
import 'reflect-metadata'


@Exclude()
class Todo {
    @Expose() title: string
    @Expose()
    @Type(() => Todo)
    todos: Todo[]
}


console.log(plainToClass(Todo, { x: 'X',
                                 title: 'hello',
                                 todos: [ { title: 'milk' },
                                          { title: 'cheese' } ] },
                         /*{ strategy: "excludeAll" }*/))
