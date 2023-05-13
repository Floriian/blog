import { PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './CreatePost.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {}
