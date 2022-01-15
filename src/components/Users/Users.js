import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";
import "./Users.css"
import Post from "../Post/Post";
import Posts from "../Posts/Posts";

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
            {/*{user &&*/}
            {/*<div className={"oneUser"}>*/}
            {/*    <div className={"oneUserWrap"}>*/}
            {/*        <div className={"userDetails"}>*/}
            {/*            <h1>User details:</h1>*/}
            {/*            <h4>id:{user.id}</h4>*/}
            {/*            <h5>name: {user.name}, username: {user.username}</h5>*/}
            {/*            <p>address, street: {user.address.street}</p>*/}
            {/*            <p>suite: {user.address.suite}</p>*/}
            {/*            <p>city: {user.address.city}</p>*/}
            {/*            <p>zipcode: {user.address.zipcode}</p>*/}
            {/*            <p>geo, lat: {user.address.geo.lat}</p>*/}
            {/*            <p>lng: {user.address.geo.lng}</p>*/}
            {/*            <p>phone: {user.phone}</p>*/}
            {/*            <a href={user.website}>website</a>*/}
            {/*            <p>company, name: {user.company.name}</p>*/}
            {/*            <p>catchPhrase: {user.company.catchPhrase}</p>*/}
            {/*            <p>bs: {user.company.bs}</p>*/}

            {/*        </div>*/}
            {/*        <button >get posts</button>*/}

            {/*    </div>*/}
            {/*</div>}*/}
        </div>
    );
};

export default Users;