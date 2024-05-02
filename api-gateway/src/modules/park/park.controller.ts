import { Controller, Get, Post, Body, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { ParkService } from './park.service';
import { CreateParkDto } from './dto/create-park.dto';
import { UpdateParkDto } from './dto/update-park.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('park')
@Controller('park')
export class ParkController {
  constructor(private readonly parkService: ParkService) { }

  @Post('create')
  create(@Body() createParkDto: CreateParkDto) {
    console.log(createParkDto);
    return this.parkService.create(createParkDto);
  }

  @Get()
  findAll() {
    return this.parkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.parkService.findOne(id);
  }

  @Put('update/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateParkDto: UpdateParkDto) {
    return this.parkService.update(id, updateParkDto);
  }

  @Delete('delete/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.parkService.remove(id);
  }
}
