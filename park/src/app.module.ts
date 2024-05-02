import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParksModule } from './modules/parks/parks.module';
import { connectionSource } from './common/config/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(connectionSource), ParksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

