import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./NoteItem";
import NotesListEmpty from "./NotesListEmpty";

function NotesList({ notes }) {
    return (
        <>
            {notes.length === 0 ? (
                <NotesListEmpty />
            ) : (
                <section className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                    {notes.map((note) => (
                        <NoteItem key={note.id} note={note} />
                    ))}
                </section>
            )}
        </>
    );
}

NotesList.propTypes = {
    notes: PropTypes.array.isRequired,
};

export default NotesList;
