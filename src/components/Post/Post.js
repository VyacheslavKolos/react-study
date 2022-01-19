import React from 'react';
import {Link} from "react-router-dom";

import css from "./Post.module.css"

const Post = ({post}) => {
    const {userId, id, title} = post;
    return (
        <div className={css.post}>
            <p>{id}) userId:{userId}, title: {title}</p>
            <Link to={id.toString()}>
                <button>Post Details</button>
            </Link>
        </div>
    );
};

export default Post;