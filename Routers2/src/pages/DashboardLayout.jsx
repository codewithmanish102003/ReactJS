// src/pages/DashboardLayout.js
// import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div style={{ display: "flex" }}>
            {/* Sidebar */}
            <nav style={{ width: "200px", padding: "1rem", backgroundColor: "#f0f0f0" }}>
                <h3>Dashboard</h3>
                <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="settings">Settings</NavLink></li>
                    {/* Add other dashboard links here */}
                </ul>
            </nav>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "1rem" }}>
                <Outlet /> {/* Renders nested routes like Dashboard and Settings */}
            </div>
        </div>
    );
}

export default DashboardLayout;
