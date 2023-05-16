import { Post } from "../../types/post";

type Props = {
  post: Post;
};
export default function BlogPreview({ post }: Props) {
  return (
    <div className="border border-gray-500 max-w-lg rounded m-2">
      <h1 className="font-bold text-2xl">{post.title}</h1>
      {post.content}
      {post.likes}
      Comments {post.comments}
    </div>
  );
}
