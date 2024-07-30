import React from "react";
import PropTypes from "prop-types";
import { MdOutlineLanguage } from "react-icons/md";

function LocaleButton({ locale, onClick }) {
    return (
        <button
            className="flex items-center p-2 rounded-lg dark:hover:bg-neutral-700 hover:bg-sky-300 text-light"
            onClick={() => onClick()}
        >
            <MdOutlineLanguage size="1.5rem" title={locale === "id" ? "Ganti Bahasa" : "Change Language"} />
        </button>
    );
}

LocaleButton.propTypes = {
    locale: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default LocaleButton;
