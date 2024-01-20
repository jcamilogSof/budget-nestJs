import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { IncomeModule } from './income/income.module';
import { BillsModule } from './bills/bills.module';
import { SavingsModule } from './savings/savings.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UsersModule, IncomeModule, BillsModule, SavingsModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
