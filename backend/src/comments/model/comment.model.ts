import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
@Schema()
export class Comment {
  @Prop({ required: true })
  content: string;

  @Prop({
    default: 0,
  })
  likes: number;
}

export type CommentDocument = HydratedDocument<Comment>;
export const CommentSchema = SchemaFactory.createForClass(Comment);
