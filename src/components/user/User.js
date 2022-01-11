import React from 'react';

import user from "./user.css";

const User = (props) => {
    const {id,name,username,email}=props;
    return (
        <div className="useR">
            <h4>id:{id}</h4>
            <h5>name: {name}, username: {username}, email: {email}</h5>
        </div>
    );
};

export default User;