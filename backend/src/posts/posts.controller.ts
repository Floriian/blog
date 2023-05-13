import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/CreatePost.dto';
import { UpdatePostDto } from './dto/UpdatePost.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findPosts() {
    return this.postsService.findPosts();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findPost(@Param('id') id: string) {
    return this.postsService.findPost(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createPost(@Body() dto: CreatePostDto) {
    return this.postsService.createPost(dto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  updatePost(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    return this.postsService.updatePost(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }
}
