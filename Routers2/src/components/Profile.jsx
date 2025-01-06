// components/Profile.js
// import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Profile() {
    const userData = useLoaderData();
    return (
        <div>
            <h1>{userData.name}</h1>
            <p>{userData.bio}</p>
        </div>
    );
}

export default Profile;
