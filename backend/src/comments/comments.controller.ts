import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/CreateComment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get(':id')
  getPostComments(@Param('id') id: string) {
    return this.commentsService.getPostComments(id);
  }

  @Post(':id')
  createComment(@Param('id') id: string, @Body() dto: CreateCommentDto) {
    return this.commentsService.createComment(id, dto);
  }

  @Delete(':id')
  deleteComment(@Param('id') id: string) {
    return this.commentsService.deleteComment(id);
  }

  @Delete('/all/:id')
  deleteAllComment(@Param('id') id: string) {
    return this.commentsService.deleteAll(id);
  }
}
