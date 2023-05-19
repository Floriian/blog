import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './model/post.model';
import mongoose, { Model } from 'mongoose';
import { CreatePostDto } from './dto/CreatePost.dto';
import { UpdatePostDto } from './dto/UpdatePost.dto';
import { Success } from '../types/success';
import { markdownToTxt } from 'markdown-to-txt';
@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

  async findPosts(): Promise<Post[]> {
    return await this.postModel.find({}, null, {
      sort: {
        createdAt: -1,
      },
    });
  }

  async findPost(id: string): Promise<Post> {
    try {
      const post = await this.postModel.findById(id);
      if (!post) throw new NotFoundException("This post doesn't exists.");
      return post;
    } catch (e) {
      if (e instanceof mongoose.Error) {
        if (e.name === 'CastError') {
          throw new BadRequestException('Invalid ID.');
        }
      }
      throw e;
    }
  }

  async createPost(dto: CreatePostDto): Promise<Post> {
    const preview = markdownToTxt(dto.content.slice(0, 150));
    const post = await this.postModel.create({ ...dto, preview });
    return post.save();
  }

  async incrementLike(id: string): Promise<Post> {
    await this.findPost(id);
    const post = await this.postModel.findById(id);
    post.likes += 1;
    await post.save();
    return post;
  }

  async decrementLike(id: string): Promise<Post> {
    await this.findPost(id);
    const post = await this.postModel.findById(id);
    post.likes -= 1;
    await post.save();
    return post;
  }

  async updatePost(id: string, dto: UpdatePostDto): Promise<Post> {
    if (Object.keys(dto).length <= 0)
      throw new BadRequestException('No data provided.');

    await this.findPost(id);

    const post = await this.postModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          content: dto.content,
          title: dto.title,
          updatedAt: Date.now(),
        },
      },
    );

    const updatedTodo = await this.findPost(post.id); //TODO: This must be ObjectID
    return updatedTodo;
  }

  async deletePost(id: string): Promise<Success> {
    try {
      const deletedPost = await this.postModel.findByIdAndDelete(id);
      if (deletedPost) return { success: true };
    } catch (e) {
      if (e instanceof mongoose.Error) {
        if (e.name === 'CastError')
          throw new NotFoundException("This post doesn't exists.");
        throw e;
      }
      return { success: false };
    }
  }
}
