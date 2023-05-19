import { BaseEntity } from "./base.entity";
export interface PostEntity extends BaseEntity {
  title: string;
  content: string;
  preview: string;
  createdAt: Date;
  updatedAt: Date;
  likes: number;
  comments: number;
}
