import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Post } from '../../posts/model/post.model';
@Schema()
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop({
    default: 0,
  })
  likes: number;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: Post.name,
  })
  post: Post;
}

export type CommentDocument = HydratedDocument<Comment>;
export const CommentSchema = SchemaFactory.createForClass(Comment);
