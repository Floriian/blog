import { BaseEntity } from "./base.entity";

export type Comment = {
  _id: string;
  content: string;
  likes: number;
  post: string;
};

export interface CommentEntity extends BaseEntity {
  content: string;
  likes: number;
  post: string;
}
