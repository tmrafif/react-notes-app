import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import useUser from "./hooks/useUser";
import useLocale from "./hooks/useLocale";
import useTheme from "./hooks/useTheme";
import routes from "./routes";
import { getUserLogged } from "./utils/api";

function App() {
    const [initializing, setInitializing] = React.useState(true);
    const { setUser } = useUser();
    const { initLocale } = useLocale("App");
    const { initTheme } = useTheme();

    React.useEffect(() => {
        // check if user is logged in
        getUserLogged().then(({ data }) => {
            setUser(data);
            setInitializing(false);
        });

        // set theme
        initLocale();
        initTheme();
    }, []);

    // initializing
    if (initializing) {
        return null;
    }

    // main app
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Routes>
                    {routes.map(({ path, element }, index) => (
                        <Route key={index} path={path} element={element} />
                    ))}
                </Routes>
            </main>
        </div>
    );
}

export default App;
