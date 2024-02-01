import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { IncomeService } from './income.service';
import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { MongoIdPipe } from '../utils/pipes/mongo-id/mongo-id.pipe';
import { ApiResponseService } from '../utils/api-response/api-response.service';

@ApiTags('income')
@Controller('income')
export class IncomeController {
  constructor(
    private readonly incomeService: IncomeService,
    private readonly apiResponseService: ApiResponseService
    ) {}

  @Post()
  async create(@Body() createIncomeDto: CreateIncomeDto) {
    try {
      const res = await this.incomeService.create(createIncomeDto);
      return this.apiResponseService.success(res)
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }

  @Get()
  findAll() {
    return this.incomeService.findAll();
  }

  @Get(':id')
  findAllByUser(@Param('id', MongoIdPipe) id: string) {
    try {
      const res = this.apiResponseService.success(this.incomeService.findAllByUser(id));
      return res;
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }


  @Patch(':id')
  update(@Param('id', MongoIdPipe) id: string, @Body() updateIncomeDto: UpdateIncomeDto) {
    try {
      const res = this.apiResponseService.success(this.incomeService.update(id, updateIncomeDto));
      return res;
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }

  @Delete(':id')
  remove(@Param('id', MongoIdPipe) id: string) {
    try {
      const res = this.apiResponseService.success(this.incomeService.remove(id));
      return res;
    } catch (error) {
      return this.apiResponseService.error(error);
    }
    
  }
}
