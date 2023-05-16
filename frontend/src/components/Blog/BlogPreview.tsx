import { Post } from "../../types/post";
import IconComment from "../Icons/IconComment";
import IconLike from "../Icons/IconLike";

type Props = {
  post: Post;
};
export default function BlogPreview({ post }: Props) {
  return (
    <section className="border border-gray-500 max-w-lg w-full rounded m-2 p-2">
      <h1 className="font-bold text-2xl">{post.title}</h1>
      <p className="text-sm text-gray-500">
        {post.createdAt.toString().split("T")[0]}
      </p>
      <hr />
      <p>
        {post.content.length > 100
          ? post.content.slice(0, 100) + "..."
          : post.content}
      </p>
      <div className="flex justify-end gap-2 text-lg">
        <div className="flex items-center cursor-pointer">
          <IconComment className="hover:text-blue-600 transition-colors duration-150" />
          {post.comments}
        </div>
        <div className="flex items-center cursor-pointer">
          <IconLike className="hover:text-blue-600 transition-colors duration-150" />
          {post.likes}
        </div>
      </div>
    </section>
  );
}
