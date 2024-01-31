import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TotalincomeandbillsService } from './totalincomeandbills.service';
import { CreateTotalincomeandbillDto } from './dto/create-totalincomeandbill.dto';
import { UpdateTotalincomeandbillDto } from './dto/update-totalincomeandbill.dto';

@Controller('totalincomeandbills')
export class TotalincomeandbillsController {
  constructor(private readonly totalincomeandbillsService: TotalincomeandbillsService) {}

  @Post()
  create(@Body() createTotalincomeandbillDto: CreateTotalincomeandbillDto) {
    return this.totalincomeandbillsService.create(createTotalincomeandbillDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.totalincomeandbillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTotalincomeandbillDto: UpdateTotalincomeandbillDto) {
    return this.totalincomeandbillsService.update(+id, updateTotalincomeandbillDto);
  }
}
