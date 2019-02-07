import { Injectable } from "@nestjs/common";


@Injectable()
export default class HelloValueProvider {
    value = 'Hello, World!'
}
