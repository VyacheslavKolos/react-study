import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";
import "./Users.css"

const Users = ({getUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value));
    }, [])


    return (
        <div className={"usersWrap"}>

            <div className={"users"}>
                <h1>Users:</h1>
                {users.map(value => <User key={value.id} user={value} getUser={getUser}/>)}
            </div>
        </div>
    );
};

export default Users;