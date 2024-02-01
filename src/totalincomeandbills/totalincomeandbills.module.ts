import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TotalincomeandbillsService } from './totalincomeandbills.service';
import { TotalincomeandbillsController } from './totalincomeandbills.controller';
import { Totalincomeandbill, TotalincomeandbillSchema } from './entities/totalincomeandbill.entity';
import { ApiResponseService } from '../utils/api-response/api-response.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Totalincomeandbill.name, 
        schema: TotalincomeandbillSchema 
      }
    ]),
  ],
  controllers: [TotalincomeandbillsController],
  providers: [TotalincomeandbillsService, ApiResponseService],
  exports: [TotalincomeandbillsService]
})
export class TotalincomeandbillsModule {}
