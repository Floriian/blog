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
import {
  ApiAcceptedResponse,
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PostEntity } from './entity/post.entity';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    isArray: true,
    type: PostEntity,
    description: 'It returns all posts.',
  })
  findPosts() {
    return this.postsService.findPosts();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    isArray: false,
    type: PostEntity,
    description: 'It returns a post by id.',
  })
  @ApiNotFoundResponse({
    isArray: false,
    description: 'This error happens, when no post found with given ID.',
  })
  @ApiBadRequestResponse({
    isArray: false,
    description: 'This error happens, when the given post id is invalid',
  })
  findPost(@Param('id') id: string) {
    return this.postsService.findPost(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiCreatedResponse({
    isArray: false,
    type: PostEntity,
    description: 'It creates a post, and return it.',
  })
  createPost(@Body() dto: CreatePostDto) {
    return this.postsService.createPost(dto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiAcceptedResponse({
    isArray: false,
    type: PostEntity,
    description: 'It updates a post and returns the updated post.',
  })
  @ApiBadRequestResponse({
    isArray: false,
    description:
      'This error happens, when no DTO provided or the DTO is invalid',
  })
  @ApiNotFoundResponse({
    isArray: false,
    description: "This error happens, when the post is doesn't exists.",
  })
  updatePost(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    return this.postsService.updatePost(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiAcceptedResponse({
    isArray: false,
    description: 'It deletes post.',
  })
  @ApiNotFoundResponse({
    isArray: false,
    description: "This error happens, when the post is doesn't exists.",
  })
  deletePost(@Param('id') id: string) {
    return this.postsService.deletePost(id);
  }
}
