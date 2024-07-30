import React from "react";
import { UserContext } from "../contexts/UserContext";

function useUser() {
    return React.useContext(UserContext);
}

export default useUser;