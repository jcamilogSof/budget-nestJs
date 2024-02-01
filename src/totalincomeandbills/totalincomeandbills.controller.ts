import { Controller, Get, Param } from '@nestjs/common';
import { TotalincomeandbillsService } from './totalincomeandbills.service';
import { MongoIdPipe } from '../utils/pipes/mongo-id/mongo-id.pipe';
import { ApiResponseService } from '../utils/api-response/api-response.service';

@Controller('balance')
export class TotalincomeandbillsController {
  constructor(
    private readonly totalincomeandbillsService: TotalincomeandbillsService,
    private readonly apiResponseService: ApiResponseService
  ) {}
  @Get(':id')
  async findOne(@Param('id', MongoIdPipe) id: string) {
    try {
      const res = await this.totalincomeandbillsService.findByUser(id);
      return this.apiResponseService.success(res);
    } catch (error) {
      return this.apiResponseService.error(error); 
    }
  }
}
