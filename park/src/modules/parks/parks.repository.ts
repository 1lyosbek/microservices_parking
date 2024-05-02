import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParkEntity } from './entities/park.entity';
import { IParkRepository } from './interfaces/p.repository';

export class ParkRepository implements IParkRepository {
  constructor(
    @InjectRepository(ParkEntity)
    private repository: Repository<ParkEntity>,
  ) {}

  async getOneById(id: number): Promise<ParkEntity | undefined> {
    return await this.repository.findOneBy({ id });
  }
  
  async getAll(): Promise<ParkEntity[]>{
    return await this.repository.find();
  }

  async create(park: ParkEntity): Promise<ParkEntity>{
    return await this.repository.save(park);
  }

  async update(entity: ParkEntity): Promise<ParkEntity> {
    return await this.repository.save(entity);
  }

  async delete(entity: ParkEntity): Promise<ParkEntity> {
    return await this.repository.remove(entity);
  }
}
