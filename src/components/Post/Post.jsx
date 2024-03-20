import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
      const postStyle = {
        border: '2px solid purple',
        padding: '5px',
        borderRadius: '20px',
    }
    return (
        <div style={postStyle}>
            <h2>Id: { post.id}</h2>
            <p>Title: {post.title}</p>
           <Link to={`/post/${post.id}`}>Show post</Link>
        </div>
    );
};

export default Post;