import React from 'react';

import "./UserDetails.css"

const UserDetails = ({user, getUserId}) => {
    return (
        <div className={"userDetailsWrap"}>
            <div className={"oneUser"}>
                <div className={"oneUserWrap"}>
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
                    <button onClick={() => getUserId(user.id)}>get posts</button>

                </div>
            </div>
        </div>
    );
};

export default UserDetails;