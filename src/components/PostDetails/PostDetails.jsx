import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {postId} = useParams();
    console.log(postId)
    const navigate = useNavigate();
    // console.log(post)

    const handleGoBack = () => {
        navigate(-1);
}

    return (
        <div>
            <h3>Post Details About: </h3>
          
           <h2>Id: { post.id}</h2>
            <p>Title: {post.title}</p>
            <p>{post.body}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;