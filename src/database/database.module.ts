import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'src/config';

@Global()
@Module({
    imports: [
        MongooseModule.forRootAsync({
            useFactory: ( configService: ConfigType<typeof config> ) => {
                const  { user, password, dbName } = configService.mongo;
                return { uri: `mongodb+srv://${user}:${password}@${dbName}.z463emr.mongodb.net/${dbName}?retryWrites=true&w=majority` }
            },
            inject: [config.KEY]
        })
    ],
    exports: [MongooseModule]
})
export class DatabaseModule {}
