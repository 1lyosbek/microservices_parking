import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RoleEnum } from '../../common/enums/enum';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UpdateDto } from './dto/update-user.dto';
import { ResData } from '../../lib/resData';

describe('UsersController', () => {
  let controller: UsersController;

  const baseEntity = { id: 1, createdAt: Date.now(), lastUpdateAt: Date.now()}
  const mockData = [{
    ...baseEntity, 
    phoneNumber: "+998335701001",
    password: "test",
    role: RoleEnum.ADMIN,
    balance: 10000,
    parkId: 1 }];

  const mockService = {
    create: jest.fn((data: CreateUserDto)=>{
      const newUser = new UserEntity();
      newUser.phoneNumber = data.phoneNumber;
      newUser.password = data.password;
      newUser.role = data.role;
      newUser.balance = data.balance;
      newUser.parkId = data.parkId;
      const resData = new ResData<UserEntity>("user created", 201, newUser);
      return Promise.resolve(resData);
    }),
    findAll: jest.fn(()=>{
        const resData = new ResData("all users", 200, mockData);
        return Promise.resolve(resData);
    }),
    findOne: jest.fn((id: number)=>{
        const foundUser = mockData.find((item)=>{
          return item.id === id;
        });
        const resData = new ResData("user found", 200, foundUser);
        return Promise.resolve(resData);
    }),
    update: jest.fn((data: UpdateDto)=>{
        const user = mockData.find((item)=>{
          return item.id === data.id;
        });
        if(user){
          user.phoneNumber = data.data.phoneNumber;
          user.password = data.data.password;
          user.role = data.data.role;
          user.balance = data.data.balance;
          user.parkId = data.data.parkId;
        }
        const resData = new ResData("user updated", 200, user);
        return Promise.resolve(resData);
    }),
    remove: jest.fn((id: number)=>{
        const user = mockData.find((item)=>{
          return item.id === id;
        });
        if(user){
          mockData.splice(mockData.indexOf(user), 1);
        }
        const resData = new ResData("user deleted", 200, user);
        return Promise.resolve(resData);
    }),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
    .overrideProvider(UsersService)
    .useValue(mockService)
    .compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('should create user', async () => {
    const createUserDto = {
      phoneNumber: "+998335701001",
      password: "test",
      role: RoleEnum.ADMIN,
      balance: 10000,
      parkId: 1,
    }
    const result = await controller.create(createUserDto);
    expect(result.statusCode).toBe(201);
  })

  it('should get all users', async () => {
    const result = await controller.getAll();
    console.log(result);
    expect(result.statusCode).toBe(200);
  })
  it('should get one user', async () => {
    const result = await controller.getOne({id: 1});
    expect(result.statusCode).toBe(200);
  })
  it('should update user', async () => {
    const result = await controller.update({id: 1, data: {phoneNumber: "+998335701002", password: "test", role: RoleEnum.CLIENT, balance: 10000, parkId: 1}});
    expect(result.statusCode).toBe(200);
  })
  it('should delete user', async () => {
    const result = await controller.delete({id: 1});
    expect(result.statusCode).toBe(200);
  })
});
