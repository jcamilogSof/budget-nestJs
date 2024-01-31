import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { BillsService } from './bills.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

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

  @Get(':idUser')
  async findAllByUser(@Param('idUser') idUser: string) {
    try {
      const res = await this.billsService.findAllByUser(idUser);
      return this.apiResponseService.success(res);
    } catch (error) {
      return this.apiResponseService.error(error);
    } 
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const res = await this.billsService.findOne(id);
      return this.apiResponseService.success(res);
    } catch (error) {
      this.apiResponseService.error(error);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBillDto: UpdateBillDto) {
    try {
      const res = await this.billsService.update(id, updateBillDto);
      return res;
    } catch (error) {
      return this.apiResponseService.error(error);
     }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const res = await this.billsService.remove(id);
      return this.apiResponseService.success(res);
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }
}
