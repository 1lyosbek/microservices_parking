import { Module } from '@nestjs/common';
import { ApiGatewayService } from './user.service';
import { ApiGatewayController } from './user.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { config } from 'src/common/config/config';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'USER_SERVICE', transport: Transport.TCP, options: { port: config.mic_port_user, host: config.mic_port_user_host } },
    ]),
  ],
  controllers: [ApiGatewayController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule { }
