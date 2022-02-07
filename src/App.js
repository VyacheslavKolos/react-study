import './App.css';

import {Cars, Form, Layout} from "./components";
import {Route, Routes} from "react-router-dom";
import {CommentsPage, PostsPage, UsersPage} from "./Pages";


function App() {

    return (
        <div className="App">

            <Routes>
                <Route path={"/"} element={<Layout/>}>

                    <Route path={"cars"} element={<Cars/>}/>

                    <Route path={"users"} element={<UsersPage/>}/>

                    <Route path={"posts"} element={<PostsPage/>}/>

                    <Route path={"comments"} element={<CommentsPage/>}/>

                </Route>
            </Routes>

        </div>
    );
}

export default App;