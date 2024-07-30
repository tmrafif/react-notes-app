import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useUser from "../hooks/useUser";

const PrivateRoute = () => {
    const { user } = useUser();

    if (!Object.keys(user).length) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
