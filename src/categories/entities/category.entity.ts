import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema()
export class Category extends Document {

    @Prop({ required: true })
    name: string;
    
    @Prop({type: Types.ObjectId , required: true })
    idUser: string | Types.ObjectId;

    @Prop({ required: true })
    date: Date;
    
}

export const CategorySchema = SchemaFactory.createForClass(Category);
