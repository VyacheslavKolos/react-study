import React from 'react';
import css from "./Layout.module.css";
import {NavLink, Outlet} from "react-router-dom";
import Header from "../components/Header/Header";

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