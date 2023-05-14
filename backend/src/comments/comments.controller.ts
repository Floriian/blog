import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/CreateComment.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('comments')
@ApiTags('Comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getPostComments(@Param('id') id: string) {
    return this.commentsService.getPostComments(id);
  }

  @Post(':id')
  @HttpCode(HttpStatus.CREATED)
  createComment(@Param('id') id: string, @Body() dto: CreateCommentDto) {
    return this.commentsService.createComment(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  deleteComment(@Param('id') id: string) {
    return this.commentsService.deleteComment(id);
  }

  @Delete('/all/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  deleteAllComment(@Param('id') id: string) {
    return this.commentsService.deleteAll(id);
  }
}
