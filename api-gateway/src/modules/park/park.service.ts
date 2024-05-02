import { Inject, Injectable } from '@nestjs/common';
import { CreateParkDto } from './dto/create-park.dto';
import { UpdateParkDto } from './dto/update-park.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ParkService {
  constructor(@Inject('PARK_SERVICE') private parkClient: ClientProxy) { }
  create(createParkDto: CreateParkDto) {
    const pattern = { cmd: 'createPark' };
    return this.parkClient.send(pattern, createParkDto)
  }

  findAll() {
    return this.parkClient.send({ cmd: "getAllPark" }, {});
  }

  findOne(id: number) {
    return this.parkClient.send({ cmd: "getOnePark" }, { id });
  }

  update(id: number, updateParkDto: UpdateParkDto) {
    return this.parkClient.send({ cmd: "updatePark" }, { id, data: updateParkDto});
  }

  remove(id: number) {
    return this.parkClient.send({ cmd: "deletePark" }, { id });
  }
}
