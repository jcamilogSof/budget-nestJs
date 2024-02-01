import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TotalincomeandbillsService } from './totalincomeandbills.service';
import { TotalincomeandbillsController } from './totalincomeandbills.controller';
import { Totalincomeandbill, TotalincomeandbillSchema } from './entities/totalincomeandbill.entity';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        { name: Totalincomeandbill.name, 
          schema: TotalincomeandbillSchema 
        }
      ])
  ],
  controllers: [TotalincomeandbillsController],
  providers: [TotalincomeandbillsService],
  exports: [TotalincomeandbillsService]
})
export class TotalincomeandbillsModule {}
