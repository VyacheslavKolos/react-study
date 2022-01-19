import React, {useEffect, useState} from 'react';
import css from './OneUserPage.module.css'
import {useParams} from "react-router-dom";
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
                    <div>

                        <h3>id: {user.id}</h3>

                    </div>
                )
            }
        </div>
    );
};

export default OneUserPage;