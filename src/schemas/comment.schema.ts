import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';
import { Post } from './post.schema';
import * as mongoose from 'mongoose';
import { User } from './user.schema';
export type CommentDocument = HydratedDocument<Comment>;
@Schema({ collection: 'comments' })
export class Comment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Post' })
  post: Post;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
  @Prop({ type: String })
  comment: string;
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
  @Prop({ type: Date })
  updatedAt?: Date;
}
export const CommentSchema = SchemaFactory.createForClass(Comment);
