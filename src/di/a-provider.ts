import { Injectable } from "@nestjs/common";


@Injectable()
class ASvc {}


export const AProvider = {
    provide: 'A',  // may provide or mock service class
    useValue: 'Hello from A',
}

class A extends ASvc {}
class B extends ASvc {}

const BProvider = {
    provide: A,  // class as token
    useClass: 1>0 ? A : B
}
