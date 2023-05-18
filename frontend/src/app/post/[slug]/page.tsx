import Comment from "../../../components/Comment/Comment";
import Markdown from "../../../components/Markdown/Markdown";
import { CommentEntity } from "../../../types/comment.entity";
import { PostEntity } from "../../../types/post.entity";
import serverFetch from "../../../utils/serverFetch";
export async function generateStaticParams() {
  const posts = await serverFetch<PostEntity[]>("/posts");
  return posts.map((post) => ({
    slug: post._id,
  }));
}

async function getPost(id: string) {
  const post = await serverFetch<PostEntity>(`/posts/${id}`);
  return post;
}

async function getComments(postId: string) {
  const comment = await serverFetch<CommentEntity[]>(`/comments/${postId}`);
  return comment;
}

export default async function BlogId({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const comments = await getComments(params.slug);
  return (
    <div className="max-w-4xl min-w-4xl flex flex-col gap-4">
      <h1 className="text-2xl text-center">{post.title}</h1>
      <Markdown markdown={post.content} />
      <hr />
      <h2 className="text-center">Comments</h2>
      {comments.map((comment) => (
        <Comment comment={comment} key={comment._id} />
      ))}
    </div>
  );
}
