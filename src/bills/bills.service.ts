import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';

@Injectable()
export class BillsService {

  constructor(
    @InjectModel(Bill.name) private billModel: Model<Bill>
  ) { }

  async create(createBillDto: CreateBillDto) {
    try {
      const createdBill =  new this.billModel(createBillDto);
      return createdBill.save();
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
