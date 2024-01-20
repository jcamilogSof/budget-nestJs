import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import config from 'src/config';

@Global()
@Module({
    imports: [
        // MongooseModule.forRootAsync({
        //     useFactory: ( configService: ConfigType<typeof config> ) => {
        //         const  { user, password, dbName } = configService.mongo;
        //         return { uri: `mongodb+srv://${user}:${password}@${dbName}.z463emr.mongodb.net/?retryWrites=true&w=majority` }
        //     },
        // }),
        MongooseModule.forRoot('mongodb+srv://juanguerrero:root@budgetmanagementsoftwar.z463emr.mongodb.net/?retryWrites=true&w=majority')
    ],
    exports: [MongooseModule]
})
export class DatabaseModule {}
