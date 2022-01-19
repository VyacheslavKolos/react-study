import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import PostComment from "../../components/PostComment/PostComment";
import css from "./PostCommentsPage.module.css"

const PostComments = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        postsService.getCommentsById(id).then(value => setComments(value))
    }, [id])

    return (
        <div className={css.comments}>
            <h1>Comments: </h1>
            {
                comments.map(comment => <PostComment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default PostComments;