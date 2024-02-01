import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';
import { TotalincomeandbillsService } from '../totalincomeandbills/totalincomeandbills.service';

@Injectable()
export class BillsService {

  constructor(
    @InjectModel(Bill.name) private billModel: Model<Bill>,
    private readonly totalincomeandbillsService: TotalincomeandbillsService,
  ) { }

  async create(createBillDto: CreateBillDto) {
    try {
      const addDate = {
        date: new Date(),
        ...createBillDto
      }
      const createdBill =  new this.billModel(addDate);
      const resBill = await createdBill.save();
      const currentBalance = await this.totalincomeandbillsService.findByUser(createBillDto.idUser);
      const newBalance = currentBalance[0].total + createBillDto.amount;
      await this.totalincomeandbillsService.update(createBillDto.idUser, {total: newBalance});
      return resBill;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const res = await this.billModel.find().exec();
      return res;
    } catch (error) {
      throw error;
    }
  }

  async findAllByUser(idUser: string) {
    try {
      const res = await this.billModel.find({idUser}).exec();
      return res;
    } catch (error) {
      throw error;
    }
   }

  async update(id: string, updateBillDto: UpdateBillDto) {
    try {
      const res = await this.billModel.findByIdAndUpdate(id, {$set: updateBillDto}, {new: true}).exec();
      return res;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const res = await this.billModel.findByIdAndDelete(id).exec();
      return res;
    } catch (error) {
      throw error;
    }
  }
}
