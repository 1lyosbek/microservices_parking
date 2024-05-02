import { Module } from '@nestjs/common';
import { ParksService } from './parks.service';
import { ParksController } from './parks.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParkEntity } from './entities/park.entity';
import { ParkRepository } from './parks.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ParkEntity])],
  controllers: [ParksController],
  providers: [ParksService, ParkRepository],
})
export class ParksModule {}
