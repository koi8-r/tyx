import { Injectable, PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common"
import { IsString, validate, ValidationError } from 'class-validator'
import { plainToClass } from 'class-transformer'
import { ClassType } from "class-transformer/ClassTransformer"


/*
 metatype holds Object type for interfaces and
 actual type for classes
 */

@Injectable()
export class IdentifyPipe<T> implements PipeTransform<T, Promise<T>> {

    constructor(private readonly clazz?: new(... args: any[]) => T) {}

    async transform(value: T, {metatype}: ArgumentMetadata) : Promise<T> {

        let cls = this.clazz || metatype
        console.assert(cls && cls !== Object, 'Need a type to validate')

        let errors = await validate(plainToClass(cls, value))
        if (errors.length)
            throw new BadRequestException()
        else           
            return value  // may also transform from pojo
    }
}
