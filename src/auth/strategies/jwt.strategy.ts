import { Injectable, Inject } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigType } from "@nestjs/config";

import config from "../../config";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(
        @Inject(config.KEY)
        private configService: ConfigType<typeof config>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.jwt.jwt_secret
        })
    }

    validate(payload) {
        return payload;
    }
}