import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <>
            <Header/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
        </>

    );
};

export default Layout;