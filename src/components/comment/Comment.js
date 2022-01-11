import React from 'react';

const Comment = (props) => {
    const {postid,id,name,email,body}=props;
    return (
        <div className="useR">
            <h4>postId: {postid}, id:{id}</h4>
            <h4>name: {name}</h4>
            <h4>email: {email}</h4>
            <p>{body}</p>
        </div>
    );
};

export default Comment;