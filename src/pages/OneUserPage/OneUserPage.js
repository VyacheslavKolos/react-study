import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import css from './OneUserPage.module.css'
import {usersService} from "../../services/users.service";

const OneUserPage = () => {
    const {id} = useParams();
    const [user, setUser] = useState(null)
    useEffect(() => {
        usersService.getById(id).then(value => setUser({...value}))
    }, [id])
    return (
        <div className={css.user}>
            {
                user && (
                    <div className={css.userDetailsAndButton}>
                        <div className={"userDetails"}>
                            <h1>User details:</h1>
                            <h4>id:{user.id}</h4>
                            <h5>name: {user.name}, username: {user.username}</h5>
                            <p>address, street: {user.address.street}</p>
                            <p>suite: {user.address.suite}</p>
                            <p>city: {user.address.city}</p>
                            <p>zipcode: {user.address.zipcode}</p>
                            <p>geo, lat: {user.address.geo.lat}</p>
                            <p>lng: {user.address.geo.lng}</p>
                            <p>phone: {user.phone}</p>
                            <a href={user.website}>website</a>
                            <p>company, name: {user.company.name}</p>
                            <p>catchPhrase: {user.company.catchPhrase}</p>
                            <p>bs: {user.company.bs}</p>
                        </div>
                        <Link to={id.toString()}>
                            <button>Details</button>
                        </Link>
                    </div>
                )
            }
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {OneUserPage};