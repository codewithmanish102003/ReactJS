import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Profile from "./Components/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/profile/:username",
      element: (
        <>
          <Navbar />
          <Profile />
        </>
      ),
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;