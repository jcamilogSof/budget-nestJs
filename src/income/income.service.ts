import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateIncomeDto } from './dto/create-income.dto';
import { UpdateIncomeDto } from './dto/update-income.dto';
import { Income } from './entities/income.entity';

import { TotalincomeandbillsService } from '../totalincomeandbills/totalincomeandbills.service';

@Injectable()
export class IncomeService {
  constructor(
    @InjectModel(Income.name) private incomeModel: Model<Income>,
    private readonly totalincomeandbillsService: TotalincomeandbillsService,
  ) {}
  async create(createIncomeDto: CreateIncomeDto) {
    try {
      const create = new this.incomeModel(createIncomeDto);
      const resCreate = await create.save();
      const currentBalance = await this.totalincomeandbillsService.findByUser(createIncomeDto.idUser);
      const newBalance = currentBalance[0].total + createIncomeDto.amount;
      await this.totalincomeandbillsService.update(createIncomeDto.idUser, {total: newBalance});
      return resCreate;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const res = await this.incomeModel.find().exec();
      return res;
    } catch (error) {
      throw error;
    }
  }

  async findAllByUser(idUser: string) { 
    try {
      const res = await this.incomeModel.find({idUser}).exec();
      return res;
    } catch (error) {
      throw error;
    }
  }

  update(id: string, updateIncomeDto: UpdateIncomeDto) {
    try {
      const res = this.incomeModel.findByIdAndUpdate(id, {$set: updateIncomeDto}, {new: true}).exec();
      return res;
    } catch (error) {
      throw error;
    }
  }

  remove(id: string) {
    try {
      const res = this.incomeModel.findByIdAndDelete(id).exec();
      return res;
    } catch (error) {
      throw error;
    }
  }
}
