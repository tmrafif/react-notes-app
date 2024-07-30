import React from "react";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import { LocaleContext } from "../contexts/LocaleContext";
import useLocale from "../hooks/useLocale";
import useTheme from "../hooks/useTheme";
import LocaleButton from "./buttons/LocaleButton";
import LogoutButton from "./buttons/LogoutButton";
import ThemeButton from "./buttons/ThemeButton";

function Navbar() {
    const { locale, toggleLocale } = React.useContext(LocaleContext);
    const { user, logoutHandler } = useUser();
    const text = useLocale("navBar");
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="flex flex-col items-center justify-between gap-4 px-8 py-4 sm:flex-row md:px-16 bg-primary dark:bg-dark">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl text-light dark:text-primary">
                <Link to={"/"}>Notes App</Link>
            </h1>
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-8">
                <div className="flex gap-4 md:text-lg text-light">
                    {user && <Link to="/">{text.home}</Link>}
                    {user && <Link to="/archives">{text.archive}</Link>}
                </div>
                <div className="flex items-center gap-1">
                    <ThemeButton theme={theme} onClick={toggleTheme} />
                    <LocaleButton locale={locale} onClick={toggleLocale} />
                    {user && <LogoutButton onClick={logoutHandler} />}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
