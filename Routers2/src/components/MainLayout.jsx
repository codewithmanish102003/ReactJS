// components/MainLayout.js
// import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function MainLayout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet /> {/* Nested routes render here */}
            </main>
        </div>
    );
}

export default MainLayout;
