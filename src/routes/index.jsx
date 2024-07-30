import React from "react";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ArchivePage from "../pages/ArchivePage";
import AddNotePage from "../pages/AddNotePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";

const routes = [
    {
        path: "/",
        element: (
            <ProtectedRoute mode="auth">
                <HomePage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/archives",
        element: (
            <ProtectedRoute mode="auth">
                <ArchivePage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/notes/new",
        element: (
            <ProtectedRoute mode="auth">
                <AddNotePage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/notes/:id",
        element: (
            <ProtectedRoute mode="auth">
                <DetailPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/*",
        element: (
            <ProtectedRoute mode="auth">
                <NotFoundPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/login",
        element: (
            <ProtectedRoute mode="public">
                <LoginPage />
            </ProtectedRoute>
        ),
    },
    {
        path: "/register",
        element: (
            <ProtectedRoute mode="public">
                <RegisterPage />
            </ProtectedRoute>
        ),
    },
];

export default routes;
