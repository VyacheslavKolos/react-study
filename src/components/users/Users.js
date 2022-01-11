import React, {useEffect, useState} from 'react';
import User from "../user/User";
import users from "./users.css";

const Users = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {setUsers(value)
        });
    },[])


    return (
        <div className="userS">
            {
                users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username} email={value.email} />)
            }
        </div>
    );
};

export default Users;