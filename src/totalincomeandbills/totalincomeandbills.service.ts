import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTotalincomeandbillDto } from './dto/create-totalincomeandbill.dto';
import { UpdateTotalincomeandbillDto } from './dto/update-totalincomeandbill.dto';
import { Totalincomeandbill } from './entities/totalincomeandbill.entity';

@Injectable()
export class TotalincomeandbillsService {

  constructor(@InjectModel(Totalincomeandbill.name) private totalincomeandbillModel: Model<Totalincomeandbill>) {}


  create(createTotalincomeandbillDto: CreateTotalincomeandbillDto) {
    try {
      const createdTotalincomeandbill = new this.totalincomeandbillModel(createTotalincomeandbillDto);
      return createdTotalincomeandbill.save();
    } catch (error) {
      return error;
    }
  }

  async findByUser(id: string) {
    try {
      const res = await this.totalincomeandbillModel.find({idUser: id}).exec();
      return res;
    } catch (error) {
      return error;
    }
  }

  async update(id: string, updateTotalincomeandbillDto: UpdateTotalincomeandbillDto) {
    try {
      const res = await this.totalincomeandbillModel.findOneAndUpdate(
        {idUser:id}, 
        {$set: updateTotalincomeandbillDto}, 
        {new: true}
      ).exec();
      return res;
    } catch (error) { 
      return error;
    }
  }
}
