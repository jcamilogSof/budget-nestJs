import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { BillsService } from './bills.service';
import { BillsController } from './bills.controller';
import { Bill, BillSchema } from './entities/bill.entity';
import { ApiResponseService } from '../utils/api-response/api-response.service';
import { TotalincomeandbillsModule } from '../totalincomeandbills/totalincomeandbills.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Bill.name,
        schema: BillSchema,
      },
    ]),
    TotalincomeandbillsModule,
  ],
  controllers: [BillsController],
  providers: [BillsService, ApiResponseService],
})
export class BillsModule {}
