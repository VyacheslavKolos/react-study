import React from 'react';

const Post = (props) => {
    const {userid,id,title,body}=props;
    return (
        <div className="useR">
            <h4>userId: {userid}, id:{id}</h4>
            <h4>name: title: {title}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Post;