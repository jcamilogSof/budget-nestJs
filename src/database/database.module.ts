import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
    imports: [
        MongooseModule.forRoot('mongodb+srv://juanguerrero:root@budgetmanagementsoftwar.z463emr.mongodb.net/?retryWrites=true&w=majority')
    ],
    exports: [MongooseModule]
})
export class DatabaseModule {}
