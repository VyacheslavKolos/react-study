import {Link, NavLink, Route, Router, Routes} from 'react-router-dom'

import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./Layout/Layout";
import OneUserPage from "./pages/OneUserPage/OneUserPage";
import OnePostPage from "./pages/OnePostPage/OnePostPage";


function App() {

    return (
        <div className="wrap">

            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={':id'} element={<OneUserPage/>}/>
                    </Route>

                    <Route path={"posts"} element={<PostsPage/>}>
                        <Route path={':id'} element={<OnePostPage/>}/>
                    </Route>
                </Route>
            </Routes>

        </div>

    );
}

export default App;