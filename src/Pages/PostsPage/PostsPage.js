import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPost} from "../../store/post.slice";
import {PostPage} from "../PostPage/PostPage";

const PostsPage = () => {
    const {posts} = useSelector(state => state['posts']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPost())
    }, [])

    return (
        <div>
            {posts.map(post => <PostPage key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsPage};