import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponseService } from '../utils/api-response/api-response.service';
import { MongoIdPipe } from '../utils/pipes/mongo-id/mongo-id.pipe';

@UseGuards(AuthGuard('jwt'))
@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly apiResponseService: ApiResponseService,
    private readonly usersService: UsersService
  ) {}

  @Post()
  async create(
    @Body() createUserDto: CreateUserDto
  ) {
    try {
      const res = await this.usersService.create(createUserDto);
      return this.apiResponseService.success(res);
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }

  @Get()
  async findAll() {
    try {
      const res = await this.usersService.findAll();
      return  this.apiResponseService.success(res, 'Users found successfully');
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id', MongoIdPipe) id: string) {
    try {
      const res = await this.usersService.findOne(id);
      return this.apiResponseService.success(res, 'User found successfully');
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }

  @Patch(':id')
  async update(@Param('id', MongoIdPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      const res = await this.usersService.update(id, updateUserDto);
      return this.apiResponseService.success(res, 'User updated successfully');
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }

  @Delete(':id')
  async remove(@Param('id', MongoIdPipe) id: string) {
    try {
      const res = await this.usersService.remove(id);
      return this.apiResponseService.success(res, 'User deleted successfully');
    } catch (error) {
      return this.apiResponseService.error(error);
    }
  }
}
