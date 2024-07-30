import React from "react";
import PropTypes from "prop-types";
import useLocale from "../hooks/useLocale";

function SearchBar({ keyword, onKeywordChange }) {
    const text = useLocale("searchBar");

    return (
        <section className="lg:pr-3 lg:w-1/3">
            <input
                className="block w-full px-3 py-2 border rounded-md shadow-sm bg-light border-slate-300 focus:outline-none focus:border-darker dark:focus:border-light focus:ring-light sm:text-sm focus:ring-1 dark:text-light dark:bg-darker"
                type="text"
                placeholder={text.placeholder}
                value={keyword}
                onChange={(event) => onKeywordChange(event.target.value)}
            />
        </section>
    );
}

SearchBar.propTypes = {
    keyword: PropTypes.string.isRequired,
    onKeywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
