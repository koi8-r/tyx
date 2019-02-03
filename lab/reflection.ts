import 'reflect-metadata'
import { prototype } from 'events';


// ts-node -O '{"experimentalDecorators": true, "emitDecoratorMetadata": true, "declaration": true}' -r tsconfig-paths/register lab/reflection.ts


function produce(type: {name: string, prototype: any, new()}) {
    return (target: any, key: string) => {
           // B.prototype instanceof A
           console.assert( new type() instanceof Reflect.getMetadata('design:type', target, key), 'Types are not equal' )
           console.assert( type.name === Reflect.getOwnMetadata('design:type', target, key).name ||
                           Reflect.get(type, '__proto__').name === Reflect.getOwnMetadata('design:type', target, key).name,
                           'Type names are not equal' ) }}


class U {}
class W extends U {}

class A {
    @produce(W)
    a: U
}
