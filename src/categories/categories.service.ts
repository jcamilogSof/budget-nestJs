import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>
  ) { }
  create(createCategoryDto: CreateCategoryDto) {
    try {
      const create = new this.categoryModel(createCategoryDto);
      return create.save();
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all categories`;
  }

  findAllByUser(idUser: string) {
    try {
      const res = this.categoryModel.find({idUser}).exec();
      return res;
    } catch (error) {
      throw error;
    }
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    try {
      const res = this.categoryModel.findByIdAndUpdate(id, {$set: updateCategoryDto}, {new: true}).exec();
      return res;
    } catch (error) {
      throw error;
    }
  }

  remove(id: string) {
    try {
      const res = this.categoryModel.findByIdAndDelete(id).exec();
      return res;
    } catch (error) {
      throw error;
    }
  }
}
