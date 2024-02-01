import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './entities/user.entity';
import { ApiResponseService } from '../utils/api-response/api-response.service';
import { TotalincomeandbillsModule } from '../totalincomeandbills/totalincomeandbills.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    TotalincomeandbillsModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, ApiResponseService],
})
export class UsersModule {}
