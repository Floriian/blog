import Link from "next/link";
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
      <Link
        href={`/post/${post._id}`}
        className="hover:text-blue-500 transition-colors duration-150 text-lg"
      >
        Go to post
      </Link>
      <div className="flex justify-end gap-2 text-lg">
        <div className="flex items-center">
          <IconComment />
          {post.comments}
        </div>
        <div className="flex items-center">
          <IconLike />
          {post.likes}
        </div>
      </div>
    </section>
  );
}
