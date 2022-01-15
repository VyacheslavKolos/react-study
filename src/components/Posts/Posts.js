import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import {postService} from "../../services/post.service";
import "./Posts.css"

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getByUserId(userId).then(value => setPosts(value))
    }, [userId])
    return (
        <div className={"Posts"}>
            <h1>Posts:</h1>
            {
                posts.map(value => <Post key={value.id} {...value} />)
            }
        </div>
    );
};

export default Posts;