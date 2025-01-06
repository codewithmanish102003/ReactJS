// App.js

import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Profile from './components/Profile';
import DashboardLayout from './pages/DashboardLayout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import ErrorPage from './pages/ErrorPage';
import MainLayout from './components/MainLayout';
// import Navbar from './components/Navbar';

const router = createBrowserRouter([
    {
        path: "/",
        element: <><MainLayout /></>, // App layout with a Navbar
        errorElement: <ErrorPage />,
        children: [
            { path: "", element: <Home /> },
            { path: "about", element: <About /> },
            { path: "contact", element: <Contact /> },
            {
                path: "profile/:userId",
                element: <Profile />,
                loader: async ({ params }) => {
                    const response = await fetch(`/api/users/${params.userId}`);
                    if (!response.ok) throw new Error("User not found");
                    return response.json();
                },
                errorElement: <ErrorPage />,
            },
            {
                path: "dashboard",
                element: <DashboardLayout />,
                children: [
                    { path: "", element: <Dashboard /> },
                    { path: "settings", element: <Settings /> },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
