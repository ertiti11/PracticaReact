import { useState, useEffect } from "react";
import Post from "./Post";
export default function PostList() {
  const URL = "https://jsonplaceholder.typicode.com/posts";

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);
  return (
    <section id="posts">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {posts.map((post) => (
            <Post
              key={post.id}
              fecha={new Date().toLocaleDateString()}
              categoria="Pruebas"
              titulo={post.title}
              texto={post.body}
            />
          ))}
        </>
      )}
    </section>
  );
}
