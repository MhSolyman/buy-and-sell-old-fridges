import React from 'react';
import { Outlet } from 'react-router-dom';
import Foote from '../Pages/Shared/Footer/Foote';
import Navbar from '../Pages/Shared/Nav/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Foote></Foote>

        </div>
    );
};

export default Main;