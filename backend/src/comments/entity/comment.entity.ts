import { ApiProperty } from '@nestjs/swagger';
import { Comment } from '../model/comment.model';
import { Post } from '../../posts/model/post.model';

export class CommentEntity implements Comment {
  @ApiProperty()
  content: string;

  @ApiProperty()
  likes: number;

  @ApiProperty()
  post: Post;
}
