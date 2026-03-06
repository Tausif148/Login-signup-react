import { createBrowserRouter } from "react-router-dom";
import Signup from "../component/Signup";
import Login from "../component/Login";
import Profile from "../component/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/signup",
        element: <Signup />
    }
])

export default router; 