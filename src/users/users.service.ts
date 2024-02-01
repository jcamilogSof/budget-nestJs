import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { TotalincomeandbillsService } from '../totalincomeandbills/totalincomeandbills.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly totalincomeandbillsService: TotalincomeandbillsService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existUser = await this.findOne({ email: createUserDto.email });
    console.log(existUser);
    
    if (existUser) {
      throw new Error('User already exists');
    }
    const addData = { 
      createdAt: new Date(),
      ...createUserDto
    }
    try {
      const createdUser = new this.userModel(addData);
      const response = await createdUser.save();
      await this.totalincomeandbillsService.create({ idUser: response._id, total: 0 });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      return await this.userModel.find().exec();
    } catch (error) {
      throw error;
    }
  }

  async findOne(email) {
    try {
      const user = await this.userModel.findOne(email).exec();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const updateuser = await this.userModel.findByIdAndUpdate(id, { $set: updateUserDto }, { new: true }).exec();
      return updateuser;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      return await this.userModel.findByIdAndDelete(id).exec();
    } catch (error) {
      throw error;
    }
  }
}
