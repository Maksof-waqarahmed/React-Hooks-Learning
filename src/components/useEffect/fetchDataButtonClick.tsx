import React, { useState, useEffect } from "react";
import axios from "axios";

type PostSchema = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
function FetchDataButtonClick() {
  const [post, setPost] = useState<PostSchema>();
  const [id, setId] = useState<number>(1);
  const [btnId, setBtnId] = useState<number>(1);


  const handleBtn = () => {
    setBtnId(id)
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${btnId}`)
      .then((res) => {
        setPost(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e));
  }, [btnId]);

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
      <button onClick={handleBtn}>Fetch data</button>

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

export default FetchDataButtonClick;
