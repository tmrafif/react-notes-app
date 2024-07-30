import React from "react";
import { useNavigate } from "react-router-dom";
import InputGroup from "./InputGroup";
import { register } from "../utils/api";
import useInput from "../hooks/useInput";
import useLocale from "../hooks/useLocale";

function RegisterInput() {
    const [name, handleNameChange] = useInput("");
    const [email, handleEmailChange] = useInput("");
    const [password, handlePasswordChange] = useInput("");
    const [confirmPassword, handleConfirmPasswordChange] = useInput("");
    const text = useLocale("authPage");
    const navigate = useNavigate();

    function registerHandler({ name, email, password, confirmPassword }) {
        if (password !== confirmPassword) {
            alert("Password and Confirm Password must be same");
            return;
        }

        register({ name, email, password });
        navigate("/login");
    }

    return (
        <div className="input-register">
            <InputGroup
                label={text.nameLabel}
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
            />
            <InputGroup
                label={text.emailLabel}
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
            />
            <InputGroup
                label={text.passwordLabel}
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <InputGroup
                label={text.confirmPasswordLabel}
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />
            <button className="w-full px-4 py-2 my-6 font-medium rounded-md text-neutral-100 bg-secondary hover:bg-primary" type="button">{text.registerButton}</button>
        </div>
    );
}

export default RegisterInput;
