import { Controller, UseFilters } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateUserDto, ILoginDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { ResData } from '../../lib/resData';
import { AllExceptionsFilter } from '../../lib/rpc-exeptionFilter';
import { UpdateDto } from './dto/update-user.dto';
import { IFindOne } from './interfaces/user.controller';
import { ThisPhoneAlreadyUsed } from './exception/users.exception';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'user_create' })
  async create(data: CreateUserDto): Promise<ResData<UserEntity>> {
    const {data: foundByPhone} = await this.userService.getByPhone(data.phoneNumber);
    if (foundByPhone) {
      throw new ThisPhoneAlreadyUsed()
    }
   return await this.userService.create(data);
  }
  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'log_in' })
  async login(data: ILoginDto): Promise<ResData<UserEntity>> {
   return await this.userService.login(data);
  }
  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'user_getAll' })
  async getAll(): Promise<ResData<UserEntity[]>> {
   return await this.userService.findAll();
  }
  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'user_getOne' })
  async getOne(id: IFindOne ): Promise<ResData<UserEntity>> {
   return await this.userService.findOne(id.id);
  }
  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'user_update' })
  async update(data: UpdateDto): Promise<ResData<UserEntity>> {
   return await this.userService.update(data.id, data.data);
  }
  @UseFilters(new AllExceptionsFilter())
  @MessagePattern({ cmd: 'user_delete' })
  async delete(data: IFindOne): Promise<ResData<UserEntity>> {
    const { data: found } = await this.userService.findOne(data.id);
   return await this.userService.remove(found);
  }
}
