import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Role } from './role.enum';
import { Post } from './post.schema';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'users' })
export class User {
  @Prop({ type: String, required: true })
  firstname: string;
  @Prop({ type: String, required: true })
  lastname: string;
  @Prop({ type: String, required: true })
  photo: string;
  @Prop({ type: String, required: true })
  email: string;
  @Prop({ type: String, required: true })
  password: string;
  @Prop({ type: Number })
  postCount: number;
  @Prop({ type: Boolean })
  isBlocked: boolean;
  @Prop({ type: Boolean })
  isAdmin: boolean;
  @Prop({ type: String, enum: Role })
  role: Role;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  viewedBy: User;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  followers: User[];
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  following: User;
  @Prop({ type: Boolean, default: true })
  active: boolean;

  @Prop({ type: Boolean, default: false })
  verified: boolean;
  @Prop({ type: Number })
  loginAttempts: number;
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] })
  posts: Post[];
  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
  @Prop({ type: Date })
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
