import React from "react";
import PropTypes from "prop-types";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

function ThemeButton({ theme, onClick }) {
    return (
        <button
            className="flex items-center p-2 rounded-lg dark:hover:bg-neutral-700 hover:bg-sky-300 text-light"
            onClick={() => onClick()}
        >
            {theme === "light" ? (
                <MdOutlineLightMode size="1.5rem" />
            ) : (
                <MdOutlineDarkMode size="1.5rem" />
            )}
        </button>
    );
}

ThemeButton.propTypes = {
    theme: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default ThemeButton;
