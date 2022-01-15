import React from 'react';

// import "./User.css"

const User = ({user,getUser}) => {
    const {id,name,username,email}=user;
    return (
        <div className={'user'}>
            <p>{id} -- {name} -- {username} -- {email}</p>
            <button onClick={()=>getUser(user)}>Get Details</button>
        </div>
    );
};

export default User;