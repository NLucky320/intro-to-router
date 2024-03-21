import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({ post }) => {
    const navigate = useNavigate();

      const postStyle = {
        border: '2px solid purple',
        padding: '5px',
        borderRadius: '20px',
    }

    const handleShowDetail = () => {
        navigate(`/post/${post.id}`)
    }
    return (
        <div style={postStyle}>
            <h2>Id: { post.id}</h2>
            <p>Title: {post.title}</p>
            <Link to={`/post/${post.id}`}>Show post</Link>
            <button onClick={handleShowDetail}>Click to show details</button>
        </div>
    );
};

export default Post;