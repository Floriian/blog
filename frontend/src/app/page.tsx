import BlogPreview from "../components/Blog/BlogPreview";
import { Post } from "../types/post";
import serverFetch from "../utils/serverFetch";

async function getPosts() {
  const res = await serverFetch<Post[]>("/posts", {
    next: {
      revalidate: 10,
    },
  });

  return res;
}

export default async function Home() {
  const posts: Post[] = await getPosts();
  return (
    <>
      {posts.map((post) => (
        <BlogPreview post={post} key={post._id} />
      ))}
    </>
  );
}
