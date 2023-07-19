import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
// import HomeScreen from "../HomeScreen/HomeScreen";
// import ProtectedRoutes from "./ProtectedRoutes";
// import Login from "../Login/Login";
// import Profile from "../Profile/Profile";
const ProtectedRoutes = lazy(() => import('./ProtectedRoutes'))
const HomeScreen = lazy(() => import('../HomeScreen/HomeScreen'))
const Login = lazy(() => import('../Login/Login'))
const Profile = lazy(() => import('../Profile/Profile'))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoutes />,
        children: [
            {
                index: true,
                element: <HomeScreen />,
            },
            {
                path: "profile",
                element: <Profile />,
            }
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },

]);
