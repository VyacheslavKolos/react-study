import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import css from './OnePostPage.css'
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
                <div>
                    <h3>userId: {post.userId}</h3>
                    <h3>id: {post.id}</h3>
                    <p>title: {post.title}</p>
                    <p>body: {post.body}</p>
                </div>
                <Link to={"comments"}>
                    <button>Details</button>
                </Link>
            </div>)
            }
            <Outlet/>
        </div>
    );
};

export default OneUserPage;