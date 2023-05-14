import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './model/comment.model';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/CreateComment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}

  async getPostComments(id: string): Promise<Comment[]> {
    return await this.commentModel.find({
      post: id,
    });
  }

  async createComment(id: string, dto: CreateCommentDto): Promise<Comment> {
    const comment = await this.commentModel.create({
      post: id,
      content: dto.content,
    });

    await comment.save();

    return comment;
  }
}
