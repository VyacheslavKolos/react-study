import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comment.slice";
import {CommentPage} from "../CommentPage/CommentPage";

const CommentsPage = () => {

    const {comments} = useSelector(state => state['comments'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [])

    return (
        <div>
            {comments.map(comment => <CommentPage key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsPage};