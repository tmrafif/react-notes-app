import React from "react";
import PropTypes from "prop-types";
import { MdLogout } from "react-icons/md";

function LogoutButton({ onClick }) {
    return (
        <button
            className="flex items-center p-2 rounded-lg dark:hover:bg-neutral-700 hover:bg-sky-300 text-light"
            onClick={onClick}
        >
            <MdLogout size="1.5em" />
        </button>
    );
}

LogoutButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default LogoutButton;
