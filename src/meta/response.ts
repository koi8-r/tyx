import { HTTP_CODE_METADATA,
         HEADERS_METADATA } from '@nestjs/common/constants'


export function HttpLab(param: any = null) : MethodDecorator {
    return (target: object, key, descriptor) => {
        Reflect.defineMetadata(HTTP_CODE_METADATA, 200, descriptor.value)
        return descriptor
    }
}
