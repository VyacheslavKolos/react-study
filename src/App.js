import {Link, NavLink, Route, Router, Routes} from 'react-router-dom'


import Layout from "./components/Layout/Layout";
import OnePostPage from "./pages/OnePostPage/OnePostPage";

import {
    AlbumsPage,
    PhotosPage,
    HomePage,
    OneUserPage,
    UserPostsPage,
    UsersPage,
    PostComments,
    PostsPage
} from "./pages";

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

                        <Route path={':id/albums'} element={<AlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
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