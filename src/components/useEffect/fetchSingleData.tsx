import React, { useState, useEffect } from "react";
import axios from "axios";

type PostSchema = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
function FetchSingleData() {
  const [post, setPost] = useState<PostSchema | null>(null);
  const [id, setId] = useState<number>(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>Fetch Single Data</h1>
      <input
        type="number"
        value={id}
        onChange={(e: any) => setId(e.target.value)}
      />
      <div key={post.id}>
        <h2>Post</h2>
        <li>Post ID: {post.id}</li>
        <li>User ID: {post.userId}</li>
        <li>Title: {post.title}</li>
        <li>Message: {post.body}</li>
      </div>
    </div>
  );
}

export default FetchSingleData;
