import React from 'react';
import {Link} from "react-router-dom";

import css from './Album.module.css'

const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div className={css.album}>
            <h4>userId: {userId}, id:{id}</h4>
            <p>title: {title}</p>
            <Link to={`${id.toString()}/photos`}>
                <button>Photos</button>
            </Link>
        </div>
    );
};

export default Album;