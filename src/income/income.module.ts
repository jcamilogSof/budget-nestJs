import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { Income, IncomeSchema } from './entities/income.entity';
import { ApiResponseService } from '../utils/api-response/api-response.service';
import { TotalincomeandbillsModule } from '../totalincomeandbills/totalincomeandbills.module';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Income.name, schema: IncomeSchema }
    ]),
    TotalincomeandbillsModule,
  ],
  controllers: [IncomeController],
  providers: [IncomeService, ApiResponseService],
})
export class IncomeModule {}
