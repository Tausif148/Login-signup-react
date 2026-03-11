import { createBrowserRouter } from "react-router-dom";

import AuthGaurd from '../component/AuthGaurd';
import Signup from "../component/Signup";
import Login from "../component/Login";
import Profile from "../component/Profile";
import Dashboard from "../component/Dashboard";
import Settings from "../component/Settings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    },

    // Protected routes
    {
        element: <AuthGaurd />,
        children: [
            { path: "/profile", element: <Profile /> },
            { path: "/profile/dashboard", element: <Dashboard /> },
            { path: "/profile/settings", element: <Settings /> }
        ]
    }
]);

export default router;