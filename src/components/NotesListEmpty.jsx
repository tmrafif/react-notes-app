import React from "react";
import useLocale from "../hooks/useLocale";

function NotesListEmpty() {
    const text = useLocale("emptyNotesList");

    return (
        <section className="py-8 text-center">
            <p className="font-semibold text-dark dark:text-light">{text}</p>
        </section>
    );
}

export default NotesListEmpty;
