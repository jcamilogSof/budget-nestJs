import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigType } from '@nestjs/config';

import { AuthService } from './services/auth/auth.service';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './controllers/auth.controller';
import config from '../config'

@Module({
  imports: [
    PassportModule, 
    UsersModule, 
    JwtModule.registerAsync({
      inject: [ config.KEY ],
      useFactory: ( configService: ConfigType<typeof config> ) => ({
        secret: configService.jwt.jwt_secret,
        signOptions: { expiresIn: configService.jwt.jwt_expiration }
      })
    })
  ],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
