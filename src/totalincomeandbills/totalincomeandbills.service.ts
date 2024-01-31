import { Injectable } from '@nestjs/common';
import { CreateTotalincomeandbillDto } from './dto/create-totalincomeandbill.dto';
import { UpdateTotalincomeandbillDto } from './dto/update-totalincomeandbill.dto';

@Injectable()
export class TotalincomeandbillsService {
  create(createTotalincomeandbillDto: CreateTotalincomeandbillDto) {
    return 'This action adds a new totalincomeandbill';
  }

  findOne(id: number) {
    return `This action returns a #${id} totalincomeandbill`;
  }

  update(id: number, updateTotalincomeandbillDto: UpdateTotalincomeandbillDto) {
    return `This action updates a #${id} totalincomeandbill`;
  }
}
