import React from "react";
import RegisterInput from "../components/RegisterInput";
import AuthLayout from "../components/layouts/AuthLayout";

function RegisterPage() {
    return (
        <AuthLayout type="register">
            <RegisterInput />
        </AuthLayout>

    );
}

export default RegisterPage;
