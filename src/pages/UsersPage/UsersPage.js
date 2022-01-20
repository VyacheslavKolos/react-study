import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";
import User from "../../components/User/User";
import css from "./UsersPage.module.css"

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        usersService.getAll().then(value => setUsers(value))
    }, [])
    return (
        <div className={css.usersWrap}>
            <div className={css.users}>
                <h1>Users:</h1>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }
            </div>

            <div className={css.outlet}>
                <Outlet/>
            </div>

        </div>
    );
};

export {UsersPage};