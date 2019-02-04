import { Test, TestingModule } from '@nestjs/testing'
import * as request from 'supertest'
import { AppModule } from './../src/app.module'

describe('AppController (e2e)', () => {
    let app

    beforeEach(async () => {
        const moduleFixture: TestingModule =
        await Test.createTestingModule({ imports: [AppModule], })
                  .compile()

        app = moduleFixture.createNestApplication()
        await app.init()  })

    it('GET /me',
       () => request(app.getHttpServer())
                        .get('/me')
                        .expect(200)
                        .expect('Hello World!'))
})
