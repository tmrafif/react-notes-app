import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useLocale from "../../hooks/useLocale";

function AuthLayout({ children, type }) {
    const text = useLocale("authPage");

    return (
        <section className="flex items-center justify-center h-[35rem]">
            <div className="p-8 min-w-96">
                <h2 className="text-3xl font-semibold text-secondary dark:text-primary">
                    {type === "login" ? text.headerLogin : text.headerRegister}
                </h2>
                <p className="text-md text-neutral-900 dark:text-neutral-200">
                    {type === "login"
                        ? text.subheaderLogin
                        : text.subheaderRegister}
                </p>
                {children}
                <p className="text-md text-neutral-900 dark:text-neutral-200">
                    {type === "login" ? text.registerAsk : text.loginAsk}{" "}
                    {type === "login" && (
                        <Link to="/register">{text.registerLink}</Link>
                    )}
                    {type === "register" && (
                        <Link to="/login">{text.loginLink}</Link>
                    )}
                </p>
            </div>
        </section>
    );
}

AuthLayout.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(["login", "register"]),
};

export default AuthLayout;
