import { Module } from '@nestjs/common';
import { ParkService } from './park.service';
import { ParkController } from './park.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { config } from 'src/common/config/config';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'PARK_SERVICE', transport: Transport.TCP, options: { port: config.mic_port_park, host: config.mic_port_park_host } },
    ]),
  ],
  controllers: [ParkController],
  providers: [ParkService],
})
export class ParkModule {}
