import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { LocaleContext } from "../contexts/LocaleContext";

function NoteItem({ note }) {
    const { locale } = React.useContext(LocaleContext);

    return (
        <article className="items-center p-5 rounded-lg min-h-56 bg-slate-200 dark:bg-dark" key={note.id}>
            <h3 className="text-lg font-semibold text-dark dark:text-neutral-200">
                <Link to={`/notes/${note.id}`}>{note.title}</Link>
            </h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-500">
                {showFormattedDate(note.createdAt, locale)}
            </p>
            <p className="mt-2 text-dark dark:text-neutral-200">{note.body}</p>
        </article>
    );
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
};

export default NoteItem;
