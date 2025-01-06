import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul className="flex space-x-4 bg-green-500 gap-2 p-4">
                <li>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "text-red-600" : "text-gray-800"}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? "text-red-600" : "text-gray-800"}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact" 
                        className={({ isActive }) => isActive ? "text-red-600" : "text-gray-800"}
                    >
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/Profile" 
                        className={({ isActive }) => isActive ? "text-red-600" : "text-gray-800"}
                    >
                        Profile
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
