import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop()
  name: string;

  @Prop()
  dueDate: Date;

  @Prop()
  owner: string;

  @Prop()
  createBy: string;
}

export const CatSchema = SchemaFactory.createForClass(Task);