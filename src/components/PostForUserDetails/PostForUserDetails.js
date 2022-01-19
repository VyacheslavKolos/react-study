import React from 'react';

const PostForUserDetails = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div>
            <h4>{id}) userId:{userId}</h4>
            <p>title: {title}</p>
            <p>body: {body}</p>
        </div>
    );
};

export default PostForUserDetails;