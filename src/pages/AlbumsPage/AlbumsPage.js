import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {albumService} from "../../services/album.service";
import Album from "../../components/Album/Album";
import css from './AlbumsPage.module.css'

const AlbumsPage = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumService.getById(id).then(value => setAlbums(value));
    }, [id])

    return (
        <div className={css.albums}>
            <h1>Albums: </h1>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
            <Outlet/>
        </div>
    );
};

export {AlbumsPage};