import { ApiProperty } from '@nestjs/swagger';
import { Post } from '../model/post.model';

export class PostEntity implements Post {
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  likes: number;
  @ApiProperty()
  createdAt: Date;
  @ApiProperty()
  updatedAt: Date;
}
