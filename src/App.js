import './App.css';

import Users from "./components/Users/Users";
import Form from "./components/Form/Form";
import {useEffect, useState} from "react";
import {UserService} from "./services/user.service";

function App() {

    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    useEffect(() => {
        UserService.getAll().then(value => {
            setUsers([...value])
            setFilteredUsers([...value])
        })
    }, [])

    const getFilter = (data) => {
        let filteredArr = [...users];
        if (data.name) {
            filteredArr = filteredArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filteredArr = filteredArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filteredArr = filteredArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilteredUsers(filteredArr);
    }

    return (
        <div className="App">
            <Form getFilter={getFilter}/>
            <Users users={filteredUsers}/>
        </div>
    );
}

export default App;
