import { Controller, Get, Param } from '@nestjs/common';
import { TotalincomeandbillsService } from './totalincomeandbills.service';
import { MongoIdPipe } from '../utils/pipes/mongo-id/mongo-id.pipe';

@Controller('balance')
export class TotalincomeandbillsController {
  constructor(private readonly totalincomeandbillsService: TotalincomeandbillsService) {}
  @Get(':id')
  async findOne(@Param('id', MongoIdPipe) id: string) {
    try {
      const res = await this.totalincomeandbillsService.findByUser(id);
      return res;
    } catch (error) {
      return error; 
    }
  }
}
