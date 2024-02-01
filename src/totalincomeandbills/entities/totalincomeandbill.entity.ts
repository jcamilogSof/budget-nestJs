import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class Totalincomeandbill extends Document {
    @Prop({ required: true })
    total: number;

    @Prop({ required: true })
    idUser: string;
}

export const TotalincomeandbillSchema = SchemaFactory.createForClass(Totalincomeandbill);
