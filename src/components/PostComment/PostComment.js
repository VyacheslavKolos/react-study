import React from 'react';

import css from './PostComment.module.css'

const PostComment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div className={css.post}>
            <h4>postId: {postId}, id: {id}</h4>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default PostComment;