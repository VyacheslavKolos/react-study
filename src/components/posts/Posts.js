import React, {useEffect, useState} from 'react';
import User from "../user/User";
import Post from "../post/Post";

const Posts = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {setPosts(value)
            });
    },[])


    return (
        <div className="userS">
            {
                posts.map(value => <Post key={value.id} userid={value.userId} title={value.title} body={value.body} />)
            }
        </div>
    );
};

export default Posts;