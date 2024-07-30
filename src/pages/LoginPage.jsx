import React from "react";
import LoginInput from "../components/LoginInput";
import useUser from "../hooks/useUser";
import AuthLayout from "../components/layouts/AuthLayout";

function LoginPage() {
    const { loginHandler } = useUser();

    return (
        <AuthLayout type="login">
            <LoginInput onLogin={loginHandler} />
        </AuthLayout>
    );
}

export default LoginPage;
