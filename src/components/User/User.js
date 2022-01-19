import React from 'react';
import css from "./User.module.css"
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id,name,username,email}=user;
    return (
        <div className={css.user}>
            <p>{id}) {name} -- {username} -- {email}</p>
            <Link to={id.toString()}><button>User Details</button></Link>
        </div>
    );
};

export default User;