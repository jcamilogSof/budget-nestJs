import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../../../users/users.service';
import { User } from '../../../users/entities/user.entity';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string){
        const user =  await this.usersService.findOne({email});
        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);
            if(isMatch) {
                return user;
            }
        }
        return null;
    }

    generateToken(user: User){ 
        const payload = {email: user.email, sub: user.id, id: user.identification};
        return {
            access_token: this.jwtService.sign(payload),
            user
        }
    }
}
