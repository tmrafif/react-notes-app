import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function useTheme() {
    return React.useContext(ThemeContext);
}

export default useTheme;