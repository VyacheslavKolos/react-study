import React, {useState} from 'react';

const Post = (props) => {
    const {userId, id, title, body} = props;

    return (
        <div>
            <h4>userId: {userId}, id: {id}</h4>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default Post;