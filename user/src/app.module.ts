import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { connectionSource }  from './common/config/database.config';

@Module({
  imports: [TypeOrmModule.forRoot(connectionSource), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
