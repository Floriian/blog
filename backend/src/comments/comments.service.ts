import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './model/comment.model';
import mongoose, { Model } from 'mongoose';
import { CreateCommentDto } from './dto/CreateComment.dto';
import { Success } from '../types/success';

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

  async deleteComment(id: string): Promise<Success> {
    try {
      const deletedComment = await this.commentModel.deleteOne({ _id: id });
      if (deletedComment) return { success: true };
    } catch (e) {
      if (e instanceof mongoose.Error) {
        if (e.name === 'CastError') {
          throw new NotFoundException("This comment doesn't exists.");
        }
      }
      return { success: false };
    }
  }

  async deleteAll(id: string): Promise<Success> {
    try {
      const deletedComments = await this.commentModel.deleteMany({
        post: id,
      });
      if (deletedComments) return { success: true };
    } catch (e) {
      if (e instanceof mongoose.Error) {
        if (e.name === 'CastError') {
          throw new NotFoundException("This post doesn't exists.");
        }
      }
      return { success: false };
    }
  }
}
