import { Module } from "@nestjs/common"


let Mongoose = {
    provide: '',
    useFactory: async() => ({

    })
}


@Module({
    imports: [],
    providers: [Mongoose],
    exports: [Mongoose],
})
export class MongooseModule {}
