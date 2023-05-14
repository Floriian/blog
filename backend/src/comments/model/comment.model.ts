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

export type CommentdDocument = HydratedDocument<Comment>;
export const CommentSchema = SchemaFactory.createForClass(Comment);
