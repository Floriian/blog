import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './model/comment.model';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/CreateComment.dto';
import { Post } from '../posts/model/post.model';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
    @InjectModel(Post.name) private postModel: Model<Post>,
  ) {}

  async getPostComments(id: string): Promise<Comment[]> {
    return await this.commentModel.findById(id);
  }

  async createComment(id: string, dto: CreateCommentDto): Promise<Comment> {
    const comment = new Comment();
    comment.content = dto.content;
    (await this.commentModel.create(comment)).save();

    const post = await this.postModel.findById(id);
    post.comments.push(comment);
    await post.save();

    return comment;
  }
}
