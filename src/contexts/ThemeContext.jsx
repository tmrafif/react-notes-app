import React from "react";
import PropTypes from "prop-types";

const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState("light");

    function toggleTheme() {
        localStorage.setItem("theme", theme === "light" ? "dark" : "light");
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

        if (theme === "light") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    function initTheme() {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }

    const contextValue = React.useMemo(() => {
        return { theme, toggleTheme, initTheme  };
    });

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

ThemeProvider.propTypes = {
    children: PropTypes.node,
};

export { ThemeContext, ThemeProvider };
