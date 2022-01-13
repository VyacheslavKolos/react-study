import React from 'react';

import {useEffect, useState} from 'react';
import {userService} from '../'


const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
userService.getAll().then(value => setUsers(value))
    },[])
    return (
        <div>
            {console.log(users)}
        </div>
    );
};

export default Users;