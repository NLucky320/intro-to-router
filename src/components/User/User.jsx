import React from 'react';
import { Link } from 'react-router-dom';

const User = ({ user }) => {
    const userStyle = {
        border: '2px solid purple',
        padding: '5px',
        borderRadius: '20px',
    }
    return (
        <div style={userStyle}>
            
            <h2>{user.name}</h2>
            
            <p>
             email:  {user.email} 
            </p>
            <p>
             phone:  {user.phone} 
            </p>
<Link to={`/user/${user.id}`}>Show Details</Link>
<Link to={`/user/${user.id}`}><button>Click me</button></Link>
        </div>
    );
};

export default User;