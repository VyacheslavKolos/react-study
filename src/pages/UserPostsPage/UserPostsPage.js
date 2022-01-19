import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import PostForUserDetails from "../../components/PostForUserDetails/PostForUserDetails";
import css from "./UserPostsPage.module.css"

const UserPostsPage = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postsService.getPostsByUserId(userId).then(value => setPosts([...value]))
    }, [userId])

    return (
        <div className={css.tenPosts}>
            <h1>Posts:</h1>
            {
                posts.map(post => <PostForUserDetails key={post.id} post={post}/>)
            }
        </div>
    );
};

export default UserPostsPage;