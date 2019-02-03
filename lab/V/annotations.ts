import 'reflect-metadata'


export function Str(target : any, key : string) : void {
    let one = '1' as String
    let type = Reflect.getMetadata('design:type', target, key)
    Reflect.defineMetadata('tyx:type', type, target, key)
    Reflect.defineMetadata('tyx:type', 'type', target)
    console.log(type)
}
