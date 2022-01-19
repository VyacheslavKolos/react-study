import React, {useEffect, useState} from 'react';

import css from './OnePostPage.css'
import {useParams} from "react-router-dom";
import {postsService} from "../../services/posts.service";

const OneUserPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null)
    useEffect(() => {
       postsService.getById(id).then(value => setPost({...value}))
    }, [id])
    return (
        <div>
            {post && (<div className={'post'}>
                <h3>userId: {post.userId}</h3>
                <h3>id: {post.id}</h3>
                <p>title: {post.title}</p>
                <p>body: {post.body}</p>
            </div>)
            }
        </div>
    );
};

export default OneUserPage;