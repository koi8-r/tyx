import 'reflect-metadata'
import { Str } from "./annotations"


export class Todo {
    @Str title : string
}


async function validate(o: object) {
    Reflect.getMetadataKeys(o).forEach(function(p : string) {
        let type = Reflect.getMetadata('tyx:type', o, p)
        console.log(p)
        console.assert( type === o[p] )  })}


validate(new Todo())
