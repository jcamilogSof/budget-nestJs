import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const addData = { 
      createdAt: new Date(),
      ...createUserDto
    }
    try {
      const createdUser = new this.userModel(addData);
      return createdUser.save();
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

  async findOne(id) {
    try {
      const user = await this.userModel.findById(id).exec();
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
