import React from "react";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import useUser from "../hooks/useUser";

function ProtectedRoute({ children, mode }) {
    const { user } = useUser();
    const pathName = useLocation();

    if (mode === "auth" && !user) {
        return <Navigate to="/login" state={{ from: pathName }} replace />;
    }

    if (mode === "public" && user) {
        return <Navigate to="/" state={{ from: pathName }} replace />;
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    mode: PropTypes.string.isRequired,
};

export default ProtectedRoute;
