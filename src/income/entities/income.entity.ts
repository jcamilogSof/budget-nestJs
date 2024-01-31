import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class Income extends Document{
    @Prop({ required: true })
    concept: string;

    @Prop({ required: true })
    amount: number;

    @Prop({ required: true })
    date: Date;

    @Prop({ type: Types.ObjectId, required: true })
    idUser: string | Types.ObjectId;
}

export const IncomeSchema = SchemaFactory.createForClass(Income);
