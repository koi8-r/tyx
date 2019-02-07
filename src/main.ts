import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'


async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    // app.use(xmlparser())
    // app.useGlobalFilters(new HttpErrorFilter())
    // const httpRef = app.get(HTTP_SERVER_REF)
    app.use((req: any, res: any, next: any) => {
        req.nothing = 'xyz'
        next()
    })
    await app.listen(3000)
}
bootstrap()
