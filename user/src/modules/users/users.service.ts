import { Injectable } from '@nestjs/common';
import { CreateUserDto, ILoginDto } from './dto/create-user.dto';
import { IUserUpdate } from './dto/update-user.dto';
import { UserRepository } from './users.repository';
import { UserEntity } from './entities/user.entity';
import { compare, hashed } from '../../lib/bcrypt';
import { ResData } from '../../lib/resData';
import { UserByPhoneNotFoundException, UserNotFoundException } from './exception/users.exception';

@Injectable()
export class UsersService {
  constructor(private readonly userReposiory: UserRepository) {}
  async create(createUserDto: CreateUserDto):Promise<ResData<UserEntity>> {
    const newUser = new UserEntity();
    newUser.phoneNumber = createUserDto.phoneNumber;
    newUser.balance = createUserDto.balance;
    newUser.role = createUserDto.role;
    newUser.parkId = createUserDto.parkId;
    newUser.password = await hashed(createUserDto.password);
    const createdUser = await this.userReposiory.create(newUser);
    return new ResData<UserEntity>("user created suucessfully", 201, createdUser) 
  }
  async getByPhone(phoneNumber: string):Promise<ResData<UserEntity | null>>{
    const user = await this.userReposiory.getByPhone(phoneNumber);
    return new ResData<UserEntity | null>("user found by phone", 201, user)
  }

  async findAll():Promise<ResData<UserEntity[]>> {
    const foundUser = await this.userReposiory.getAll();
    return new ResData<UserEntity[]>("all users", 200, foundUser)
  }

  async findOne(id: number): Promise<ResData<UserEntity>> {
    const foundUser = await this.userReposiory.getById(id);
    if (!foundUser) {
      throw new UserNotFoundException();
    }
    return new ResData<UserEntity>("user found", 200, foundUser);
  }
  async  login(data: ILoginDto): Promise<ResData<UserEntity>> {
    const foundUser = await this.userReposiory.getByPhone(data.phoneNumber);
    if (!foundUser) {
      throw new UserByPhoneNotFoundException();
    }
    const verified = compare(data.password, foundUser.password)
    if (!verified) {
      throw new UserByPhoneNotFoundException();
    }
    return new ResData<UserEntity>("you are logged in", 200, foundUser);
  }

  async update(id: number, updateUserDto: IUserUpdate):Promise<ResData<UserEntity>> {
    const {data: foundUser } = await this.findOne(id);
    foundUser.balance = updateUserDto.balance; 
    foundUser.role = updateUserDto.role;
    foundUser.parkId = updateUserDto.parkId;
    foundUser.password = await hashed(updateUserDto.password);
    foundUser.phoneNumber = updateUserDto.phoneNumber;
    const updatedUser = await this.userReposiory.update(foundUser);
    return new ResData<UserEntity>("user updated suucessfully", 200, updatedUser)
  }

  async remove(entity: UserEntity):Promise<ResData<UserEntity>> {
    const deletedUser = await this.userReposiory.delete(entity);
    return new ResData<UserEntity>("user deleted suucessfully", 200, deletedUser)
  }
}
