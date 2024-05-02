import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import { ParkModule } from '../src/modules/park/park.module';

const createParkBody = {
  name: "Salow",
  capacity: 10000,
  price: 1000,
  userId: 2
}
const updateParkBody = {
  name: "egrefe",
  capacity: 1000,
  price: 2000,
  userId: 2
}
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, ParkModule],
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

  it(' /park (GET) -->> 200', async () => {
    const response = await request(app.getHttpServer())    
      .get('/park')
      .expect(200);
      console.log(response.body);
       expect(response.body).toMatchObject({        
         statusCode: 200,
         message: 'all parks',
         data: expect.any(Array),
       });
      })

  it(' /park/create (POST) -->> 201', async () => {
    const response = await request(app.getHttpServer())    
      .post('/park/create')
      .send(createParkBody)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(201);
       expect(response.body).toMatchObject({        
         statusCode: 201,
         message: 'Park Created Successfully',
         data: expect.any(Object),
       });
  })
  it('park/:id (GET) -->> 200', async () => {
    const response = await request(app.getHttpServer())    
      .get('/park/1')
      .expect(200);
       expect(response.body).toMatchObject({        
         statusCode: 200,
         message: 'Park Found',
         data: expect.any(Object),
       });
  })
  it('park/update/:id (PUT) -->> 200', async () => {
    const response = await request(app.getHttpServer())    
      .put('/park/update/1')
      .send(updateParkBody)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);
       expect(response.body).toMatchObject({        
         statusCode: 200,
         message: 'Park Updated',
         data: expect.any(Object),
       });
  })
  it('park/delete/:id (DELETE) -->> 200', async () => {
    const response = await request(app.getHttpServer())    
      .delete('/park/delete/15')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200);
       expect(response.body).toMatchObject({        
         statusCode: 200,
         message: 'Park Deleted',
         data: expect.any(Object),
       });
  })
  });
