import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatetimeService } from './datetime.service'

@Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService, DatetimeService],
})
export class AppModule {}
