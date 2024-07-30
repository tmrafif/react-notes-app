import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import { LocaleContext } from "../contexts/LocaleContext";

function NoteDetail({ note }) {
    const { locale } = React.useContext(LocaleContext);

    return (
        <>
            <h3 className="text-2xl font-bold text-darker dark:text-light">{note.title}</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-500">
                {showFormattedDate(note.createdAt, locale)}
            </p>
            <div className="mt-3 text-darker dark:text-light">{note.body}</div>
        </>
    );
}

NoteDetail.propTypes = {
    note: PropTypes.shape({
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
    }),
};

export default NoteDetail;
