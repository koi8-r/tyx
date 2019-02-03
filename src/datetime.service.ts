import { Injectable } from '@nestjs/common'


@Injectable()
export class DatetimeService {
    get ISO(): string { return new Date().toISOString() }
}
