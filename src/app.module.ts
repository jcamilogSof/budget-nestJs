import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { IncomeModule } from './income/income.module';
import { BillsModule } from './bills/bills.module';
import { SavingsModule } from './savings/savings.module';
import { DatabaseModule } from './database/database.module';
import { environment } from './environment';
import { ApiResponseService } from './utils/api-response/api-response.service';
import { CategoriesModule } from './categories/categories.module';
import { TotalincomeandbillsModule } from './totalincomeandbills/totalincomeandbills.module';
import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environment[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
    }),
    UsersModule, 
    IncomeModule, 
    BillsModule, 
    SavingsModule, 
    DatabaseModule, CategoriesModule, TotalincomeandbillsModule
  ],
  controllers: [AppController],
  providers: [AppService, ApiResponseService],
})
export class AppModule {}
