import React from 'react';

import "./User.css"

const User = (props) => {
    const {id,name,username,email, getUserId}=props;
    return (
        <div className={'user'}>
            <p>{id} -- {name} -- {username} -- {email}</p>
            <button onClick={()=>getUserId(id)}>Get Details</button>
        </div>
    );
};

export default User;