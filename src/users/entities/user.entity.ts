import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    lastname: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    identification: number;

    @Prop({ required: true })
    number: number;

    @Prop({ required: true })
    typeDocument: string;

    @Prop({ required: true })
    createdAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
