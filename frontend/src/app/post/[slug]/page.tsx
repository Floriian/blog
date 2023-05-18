import { Comment as TComment } from "../../../types/comment";
import Comment from "../../../components/Comment/Comment";
import serverFetch from "../../../utils/serverFetch";
import { PostEntity } from "../../../types/post";
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
  const comment = await serverFetch<TComment[]>(`/comments/${postId}`);
  return comment;
}

export default async function BlogId({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  const comments = await getComments(params.slug);
  return (
    <div className="max-w-4xl min-w-4xl flex flex-col gap-4">
      <h1 className="text-2xl text-center">{post.title}</h1>
      <p>{post.content}</p>
      <hr />
      <h2 className="text-center">Comments</h2>
      {comments.map((comment: TComment) => (
        <Comment comment={comment} key={comment._id} />
      ))}
    </div>
  );
}
