import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import React, {useState} from "react";
import {userService} from "./services/user.service";
import UserDetails from "./components/UserDetails/UserDetails";


function App() {

    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);


    const getUser = (user) => {
        setUser(user)
        setUserId(null)
    }

    const getUserId = (id) => {
        setUserId(id);
    }

    return (
        <div>
            <div className="App">
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
            {userId && <Posts userId={userId}/>}
        </div>
    );

}

export default App;
