import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    console.log(post)
    return (
        <div>
            <h3>Post Details About: </h3>
          
           <h2>Id: { post.id}</h2>
            <p>Title: {post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;