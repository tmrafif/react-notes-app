import React from "react";
import PropTypes from "prop-types";
import InputGroup from "./InputGroup";
import useInput from "../hooks/useInput";
import useLocale from "../hooks/useLocale";

function LoginInput({ onLogin }) {
    const [email, handleEmailChange] = useInput("");
    const [password, handlePasswordChange] = useInput("");
    const text = useLocale("authPage");

    return (
        <div className="input-login">
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
            <button 
                className="w-full px-4 py-2 my-6 font-medium rounded-md text-neutral-100 bg-secondary hover:bg-primary"
                type="button" onClick={() => onLogin({ email, password })}>
                {text.loginButton}
            </button>
        </div>
    );
}

LoginInput.propTypes = {
    onLogin: PropTypes.func.isRequired,
};

export default LoginInput;
