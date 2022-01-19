import {Link, NavLink, Route, Router, Routes} from 'react-router-dom'

import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Layout from "./Layout/Layout";
import OneUserPage from "./pages/OneUserPage/OneUserPage";
import OnePostPage from "./pages/OnePostPage/OnePostPage";
import UserPostsPage from "./pages/UserPostsPage/UserPostsPage";
import PostComments from "./pages/PostCommentsPage/PostComments";


function App() {

    return (
        <div className="wrap">

            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"users"} element={<UsersPage/>}>
                        <Route path={':id'} element={<OneUserPage/>}>
                            <Route path={':userId'} element={<UserPostsPage/>}/>
                        </Route>
                    </Route>

                    <Route path={"posts"} element={<PostsPage/>}>
                        <Route path={':id'} element={<OnePostPage/>}>
                            <Route path={"comments"} element={<PostComments/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>

        </div>

    );
}

export default App;