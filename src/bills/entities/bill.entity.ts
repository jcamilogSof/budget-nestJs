import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { Document, Types } from 'mongoose'

@Schema()
export class Bill extends Document {

    @Prop({ required: true })
    spent: number;

    @Prop({ required: false })
    category: string;

    @Prop({ type: Types.ObjectId, required: true })
    idUser: string | Types.ObjectId;

    @Prop({ required: true })
    date: string;

    @Prop({ required: true })
    typeCurrency: string;
}

export const BillSchema = SchemaFactory.createForClass(Bill);
