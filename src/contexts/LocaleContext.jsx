import React from "react";
import PropTypes from "prop-types";

const LocaleContext = React.createContext();

function LocaleProvider({ children }) {
    const [locale, setLocale] = React.useState("id");

    function toggleLocale() {
        localStorage.setItem("locale", locale === "id" ? "en" : "id");
        setLocale((prevLocale) => (prevLocale === "id" ? "en" : "id"));
    }

    function initLocale() {
        const savedLocale = localStorage.getItem("locale");
        if (savedLocale === "en") {
            setLocale("en");
        }
    }

    const contextValue = React.useMemo(() => {
        return { locale, toggleLocale, initLocale };
    });

    return (
        <LocaleContext.Provider value={contextValue}>
            {children}
        </LocaleContext.Provider>
    );
}

LocaleProvider.propTypes = {
    children: PropTypes.node,
};

export { LocaleContext, LocaleProvider };
