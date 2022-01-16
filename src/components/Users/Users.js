import React, {useEffect, useState} from 'react';

import User from "../User/User";


const Users = ({users}) => {

    return (
        <div>
            {
                users.map(user => <User key={user.id} {...user}/>)
            }
        </div>
    );
};

export default Users;