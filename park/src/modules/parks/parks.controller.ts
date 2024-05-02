import { Controller, UseFilters } from '@nestjs/common';
import { ParksService } from './parks.service';
import { CreateParkDto } from './dto/create-park.dto';
import { IParkUpdate } from './dto/update-park.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AllExceptionsFilter } from 'src/lib/rpc-exeptionFilter';
import { IFindOne } from './interfaces/p.controller';
import { ResData } from 'src/lib/resData';
import { ParkEntity } from './entities/park.entity';


@Controller('parks')
export class ParksController {
  constructor(private readonly parksService: ParksService) { }

  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'createPark' })
  async create(@Payload() createParkDto: CreateParkDto): Promise<ResData<ParkEntity>> {
    return await this.parksService.create(createParkDto);
  }

  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'getAllPark' })
  findAll() {
    return this.parksService.findAll();
  }

  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'getOnePark' })
  findOne(data: IFindOne) {
    return this.parksService.findOne(data.id);
  }

  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'updatePark' })
  async update(data: IParkUpdate) {
    return await this.parksService.update(data.id, data.data);
  }

  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'deletePark' })
  async remove(data: IFindOne) {
    const { data: foundUser } = await this.parksService.findOne(data.id);
    return this.parksService.remove(foundUser);
  }
}
