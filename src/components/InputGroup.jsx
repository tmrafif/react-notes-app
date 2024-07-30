import React from "react";
import PropTypes from "prop-types";

function InputGroup({ label, type, id, value, onChange }) {
    return (
        <div className="mx-auto mt-4">
            <label
                className="block mb-1 text-sm font-medium text-darker dark:text-light"
                htmlFor={id}
            >
                {label}
            </label>
            <input
                className="block w-full px-3 py-2 border rounded-md shadow-sm bg-light border-slate-300 focus:outline-none focus:border-darker dark:focus:border-light focus:ring-light sm:text-sm focus:ring-1 dark:text-light dark:bg-darker"
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
        </div>
    );
}

InputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default InputGroup;
