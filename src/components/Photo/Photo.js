import React from 'react';

import css from './Photo.module.css'

const Photo = ({photo}) => {
    const {albumId, id, title, thumbnailUrl} = photo;
    return (
        <div className={css.photo}>
            <div className={css.info}>
                <h4>albumId: {albumId}, id: {id}</h4>
                <p>title: {title}</p>
            </div>
            <img src={thumbnailUrl} alt="photo"/>
        </div>
    );
};

export default Photo;