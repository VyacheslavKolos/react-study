import React, {useEffect, useState} from 'react';
import Comment from "../comment/Comment";


const Comments = () => {
    const [Comments,setComments]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {setComments(value)
            });
    },[])


    return (
        <div className="commentS">
            {
                Comments.map(value => <Comment key={value.id} postid={value.postId} id={value.id} name={value.name} email={value.email} body={value.body} />)
            }
        </div>
    );
};

export default Comments;