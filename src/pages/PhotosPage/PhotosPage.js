import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import Photo from "../../components/Photo/Photo";
import css from './PhotosPage.module.css'

const PhotosPage = () => {
    const {albumId} = useParams();


    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        albumService.getPhotosById(albumId).then(value => setPhotos(value))
    }, [albumId])


    return (
        <div className={css.photos}>
            <h1>Photos: </h1>
            {
                photos.map(photo => <Photo key={photo.id} photo={photo}/>)
            }
        </div>
    );
};

export {PhotosPage};