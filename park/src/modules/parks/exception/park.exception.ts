import { RpcException } from '@nestjs/microservices';

export class ParkNotFoundException extends RpcException {
  constructor() {
    super('Park not found');
  }
}
