import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Post {
  @Prop({
    required: true,
  })
  title: string;

  @Prop({
    required: true,
  })
  content: string;

  @Prop({
    required: true,
  })
  preview: string;

  @Prop({
    required: true,
    default: 0,
  })
  likes: number;

  @Prop({
    default: Date.now(),
  })
  createdAt: Date;

  @Prop({
    required: false,
  })
  updatedAt: Date;

  @Prop({
    default: 0,
    required: false,
  })
  comments: number;
}

export type PostDocument = HydratedDocument<Post>;
export const PostSchema = SchemaFactory.createForClass(Post);
