import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

export class Totalincomeandbill extends Document {}

export const TotalincomeandbillSchema = SchemaFactory.createForClass(Totalincomeandbill);
