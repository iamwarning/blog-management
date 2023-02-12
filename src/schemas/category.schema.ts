import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from './user.schema';
import * as mongoose from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;
@Schema({ collection: 'categories' })
export class Category {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: User;
  @Prop({ type: String, required: true })
  title: string;
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
  @Prop({ type: Date })
  updatedAt?: Date;
}
export const CategorySchema = SchemaFactory.createForClass(Category);
