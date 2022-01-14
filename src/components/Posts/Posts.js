import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import Post from "../Post/Post";
import Users from "../Users/Users";

const Posts = ({id}) => {
    const [posts, setPosts] = useState([]);
    // const getUserPosts = (id) => {
    //     userService.getPostsById(id).then(value =>setPosts(value))
    // }
    useEffect(()=>{userService.getPostsById(id).then(value =>setPosts(value))},[])
    console.log(posts);
    console.log(id)
    return (
        <div>

            {
                posts.map(value => <Post key={value.id} {...value} getUserPosts={getUserPosts}/>)
            }
        </div>
    );
};

export default Posts;