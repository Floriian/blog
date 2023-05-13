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
    <main className="">
      {posts.map((post) => (
        <div key={post._id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </main>
  );
}
