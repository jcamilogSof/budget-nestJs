import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { MongoIdPipe } from '../utils/pipes/mongo-id/mongo-id.pipe';
import { ApiResponseService } from '../utils/api-response/api-response.service';

@ApiTags('bills')
@Controller('bills')
export class BillsController {
  constructor(
    private readonly billsService: BillsService,
    private readonly apiResponseService: ApiResponseService
    ) {}

  @Post()
  create(@Body() createBillDto: CreateBillDto) {
    try {
      const res = this.billsService.create(createBillDto);
      return this.apiResponseService.success(res);
      
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const res = await this.billsService.findAll();
      return this.apiResponseService.success(res);
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }

  @Get(':id')
  async findAllByUser(@Param('id', MongoIdPipe) id: string) {
    try {
      const res = await this.billsService.findAllByUser(id);
      return this.apiResponseService.success(res);
    } catch (error) {
      return this.apiResponseService.error(error);
    } 
  }

  @Patch(':id')
  async update(@Param('id', MongoIdPipe) id: string, @Body() updateBillDto: UpdateBillDto) {
    try {
      const res = await this.billsService.update(id, updateBillDto);
      return res;
    } catch (error) {
      return this.apiResponseService.error(error);
     }
  }

  @Delete(':id')
  async remove(@Param('id', MongoIdPipe) id: string) {
    try {
      const res = await this.billsService.remove(id);
      return this.apiResponseService.success(res);
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }
}
