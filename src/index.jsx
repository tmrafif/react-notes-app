import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import { ThemeProvider } from "./contexts/ThemeContext";

// styles
import "./styles/index.css";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <UserProvider>
            <LocaleProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </LocaleProvider>
        </UserProvider>
    </BrowserRouter>
);
