import { Inject, Injectable } from '@nestjs/common';
import { LoginDto, RegisterDto } from './dto/create-user.dto';
import { ClientProxy } from '@nestjs/microservices';
import { UserUpdateDto } from './dto/update-user.dto';

@Injectable()
export class ApiGatewayService {
  constructor(
    @Inject('USER_SERVICE') private userClient: ClientProxy,
  ) { }
  register(createUserDto: RegisterDto){
    const created = this.userClient.send({cmd: "user_create"}, createUserDto);
    return created;
  }
  login(loginDto: LoginDto){
    const logged = this.userClient.send({ cmd: "log_in" }, loginDto);
    return logged;
  } 

  findAll() {
    return this.userClient.send({cmd: "user_getAll"}, {});
  }

  findOne(id: number) {    
    return this.userClient.send({ cmd: "user_getOne"}, {id});
  }

  update(id: number, updateApiGatewayDto: UserUpdateDto) {
    return this.userClient.send({cmd: "user_update"}, {id: id, data: updateApiGatewayDto});
  }

  remove(id: number) {
    return this.userClient.send({cmd: "user_delete"}, {id: id});
  }
}
