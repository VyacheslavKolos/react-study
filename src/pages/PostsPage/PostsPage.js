import React, {useEffect, useState} from 'react';
import {postsService} from "../../services/posts.service";
import Post from "../../components/Post/Post";
import css from './PostsPage.module.css'
import {Outlet} from "react-router-dom";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postsService.getAll().then(value => setPosts(value))
    }, [])
    return (
        <div className={css.postsWrap}>
            <div className={css.posts}>
                <h1>Posts:</h1>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>

            <div className={css.outlet}>
                <Outlet/>
            </div>

        </div>
    );
};

export default PostsPage;