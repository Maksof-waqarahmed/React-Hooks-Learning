import React, {useState, useEffect} from 'react'
import axios from 'axios';

type PostSchema = {
    userId: number,
    id: number,
    title: string,
    body: string
}
function FetchData() {
    // const [posts, setPosts] = useState<any[]>([]);
    const [posts, setPosts] = useState<PostSchema[]>([]);

    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {setPosts(res.data);console.log(res)}).catch(e => console.log(e));
    }, [])
  return (
    <div>
        <h1>FetchData</h1>
        {posts && posts.map((post: PostSchema) => {
            return (
                <div key={post.id}>
                <h2>Post</h2>
                <li>Post ID: {post.id}</li>
                <li>User ID: {post.userId}</li>
                <li>Title: {post.title}</li>
                <li>Message: {post.body}</li>
                </div>
            )
        })}
    </div>
  )
}

export default FetchData