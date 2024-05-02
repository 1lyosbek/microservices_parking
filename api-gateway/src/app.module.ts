import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ApiGatewayModule } from './modules/api-gateway/user.module';
import { ParkModule } from './modules/park/park.module';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USER_SERVICE', transport: Transport.TCP , options: {port: 7778, host: 'localhost'}},
      { name: 'PARK_SERVICE', transport: Transport.TCP , options: {port: 7777, host: 'localhost'}},
    ]),
    ApiGatewayModule,
    ParkModule,
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}
