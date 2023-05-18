import BlogPreview from "../components/Blog/BlogPreview";
import { PostEntity } from "../types/post.entity";
import serverFetch from "../utils/serverFetch";

async function getPosts() {
  const res = await serverFetch<PostEntity[]>("/posts", {
    next: {
      revalidate: 10,
    },
  });

  return res;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <BlogPreview post={post} key={post._id} />
      ))}
    </>
  );
}
