import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div>
            <h2>Details About User:{ user.name}</h2>
          <p>
               {user.username} 
            </p>
            <p>
             email:  {user.email} 
            </p>
            <p>
             phone:  {user.phone} 
            </p>
            <p>
             Website:  {user.website} 
            </p>
            <p>
             company:  {user.company.name} 
            </p>
            <p>
             address:  {user.address.city} 
            </p>
        </div>
    );
};

export default UserDetails;