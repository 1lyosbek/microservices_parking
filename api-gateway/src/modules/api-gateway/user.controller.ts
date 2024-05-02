import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ApiGatewayService } from './user.service';
import { LoginDto, RegisterDto } from './dto/create-user.dto';
import { UserUpdateDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('api-gateway')
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) { }

  @Post('user-create')
  register(@Body() createUserDto: RegisterDto) {
    return this.apiGatewayService.register(createUserDto);
  }
  @Post('user-login')
  login(@Body() loginUserDto: LoginDto) {
    return this.apiGatewayService.login(loginUserDto);
  }

  @Get('user')
  findAll() {
    return this.apiGatewayService.findAll();
  }

  @Get('user/:id')
  findOne(@Param('id') id: string) {
    return this.apiGatewayService.findOne(+id);
  }

  @Put('user/:id')
  update(@Param('id') id: string, @Body() updateApiGatewayDto: UserUpdateDto) {
    return this.apiGatewayService.update(+id, updateApiGatewayDto);
  }

  @Delete('/user/:id')
  remove(@Param('id') id: string) {
    return this.apiGatewayService.remove(+id);
  }
}
