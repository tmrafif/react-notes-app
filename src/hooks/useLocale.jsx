import React from "react";
import { LocaleContext } from "../contexts/LocaleContext";
import { localeData } from "../utils/locale-data";

function useLocale(type) {
    const { locale } = React.useContext(LocaleContext);

    if (type === "App") {
        return React.useContext(LocaleContext);
    }

    const text = localeData[`${type}`][locale];
    return text;
}

export default useLocale;
