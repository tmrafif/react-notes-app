import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { login, putAccessToken, getUserLogged } from "../utils/api";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = React.useState(null);
    const navigate = useNavigate();

    async function loginHandler({ email, password }) {
        const { data } = await login({ email, password });
        putAccessToken(data.accessToken);

        const { data: userData } = await getUserLogged();
        setUser(userData);

        navigate("/");
    }

    function logoutHandler() {
        setUser(null);
        putAccessToken("");

        navigate("/login");
    }

    const contextValue = React.useMemo(() => {
        return { user, setUser, loginHandler, logoutHandler };
    });

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}

UserProvider.propTypes = {
    children: PropTypes.node,
};

export { UserContext, UserProvider };
