import { Injectable } from '@nestjs/common';
import { CreateParkDto } from './dto/create-park.dto';
import { IUpdateData, UpdateParkDto } from './dto/update-park.dto';
import { ResData } from 'src/lib/resData';
import { ParkEntity } from './entities/park.entity';
import { IParkRepository } from './interfaces/p.repository';
import { ParkNotFoundException } from './exception/park.exception';
import { ParkRepository } from './parks.repository';

@Injectable()
export class ParksService {
  constructor(private readonly parkRepository: ParkRepository) { }
  async create(createParkDto: CreateParkDto): Promise<ResData<ParkEntity>> {
    const newPark = new ParkEntity();
    newPark.name = createParkDto.name;
    newPark.capacity = createParkDto.capacity;
    newPark.price = createParkDto.price;
    newPark.userId = createParkDto.userId;
    const createdPark = await this.parkRepository.create(newPark);
    return new ResData<ParkEntity>('Park Created Successfully', 201, createdPark);
  }

  async findAll(): Promise<ResData<ParkEntity[]>> {
    const foundParks = await this.parkRepository.getAll();
    return new ResData<ParkEntity[]>('all parks', 200, foundParks);
  }

  async findOne(id: number): Promise<ResData<ParkEntity>> {
    const foundPark = await this.parkRepository.getOneById(id);
    if (!foundPark) {
      throw new ParkNotFoundException();
    }
    return new ResData<ParkEntity>('Park Found', 200, foundPark);
  }

  async update(id: number, updateParkDto: IUpdateData): Promise<ResData<ParkEntity>> {
    const { data: foundPark } = await this.findOne(id);
    foundPark.name = updateParkDto.name;
    foundPark.capacity = updateParkDto.capacity;
    foundPark.price = updateParkDto.price;
    foundPark.userId = updateParkDto.userId;
    const parkUpdated = await this.parkRepository.update(foundPark);
    console.log("Park updated", parkUpdated);
    return new ResData<ParkEntity>('Park Updated', 200, parkUpdated);
  }

  async remove(entity: ParkEntity): Promise<ResData<ParkEntity>> {
    const deletedPark = await this.parkRepository.delete(entity);
    return new ResData<ParkEntity>('Park Deleted', 200, deletedPark);
  }
}
