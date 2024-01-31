import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { IncomeService } from './income.service';
import { IncomeController } from './income.controller';
import { Income, IncomeSchema } from './entities/income.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Income.name, schema: IncomeSchema }
    ])
  ],
  controllers: [IncomeController],
  providers: [IncomeService],
})
export class IncomeModule {}
