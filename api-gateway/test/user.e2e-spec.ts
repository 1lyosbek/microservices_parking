import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ApiGatewayModule } from '../src/modules/api-gateway/user.module';

const createUserBody = {
  phoneNumber: "+998335701031",
  password: "bek01",
  role: "admin",
  balance: 100000,
  parkId: 1
}
const updateUserBody = {
  phoneNumber: "+998335701010",
  password: "bek01",
  role: "client",
  balance: 100000,
  parkId: 1
}
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ApiGatewayModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );
    await app.init();
  });

  it(' /api-gateway/user (GET) -->> 200', async () => {
    const response = await request(app.getHttpServer())    
      .get('/api-gateway/user')
      .expect(200);
       expect(response.body).toMatchObject({        
         statusCode: 200,
         message: 'all users',
         data: expect.any(Array),
       });
      })

  it(' /api-gateway/user-create (POST) -->> 201', async () => {
    const response = await request(app.getHttpServer())    
      .post('/api-gateway/user-create')
      .send(createUserBody)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(201);
       expect(response.body).toMatchObject({        
         statusCode: 201,
         message: 'user created suucessfully',
         data: expect.any(Object),
       });
  })
  it('api-gateway/user/:id (GET) -->> 200', async () => {
    const response = await request(app.getHttpServer())    
      .get('/api-gateway/user/2')
      .expect(200);
       expect(response.body).toMatchObject({        
         statusCode: 200,
         message: 'user found',
         data: expect.any(Object),
       });
  })
  it('api-gateway/user/:id (PUT) -->> 200', async () => {
    const response = await request(app.getHttpServer())    
      .put('/api-gateway/user/2')
      .send(updateUserBody)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);
       expect(response.body).toMatchObject({        
         statusCode: 200,
         message: 'user updated suucessfully',
         data: expect.any(Object),
       });
  })
  it('api-gateway/user/:id (DELETE) -->> 200', async () => {
    const response = await request(app.getHttpServer())    
      .delete('/api-gateway/user/27')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);
       expect(response.body).toMatchObject({        
         statusCode: 200,
         message: 'user deleted suucessfully',
         data: expect.any(Object),
       });
  })
  });
