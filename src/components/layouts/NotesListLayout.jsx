import React from "react";
import PropTypes from "prop-types";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../SearchBar";
import AddNoteButton from "../buttons/AddNoteButton";
import NotesList from "../NotesList";

function NotesListLayout({ title, notes }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = React.useState(
        () => searchParams.get("keyword") || ""
    );

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(keyword.toLowerCase());
    });

    return (
        <section className="px-8 md:px-16">
            <h2 className="mt-6 mb-3 text-xl font-bold text-center md:text-2xl md:text-left dark:text-neutral-100 text-neutral-800">
                {title}
            </h2>
            <SearchBar
                keyword={keyword}
                onKeywordChange={onKeywordChangeHandler}
            />
            <NotesList notes={filteredNotes} />
            <div className="fixed z-50 right-10 md:right-16 bottom-8">
                <AddNoteButton />
            </div>
        </section>
    );
}

NotesListLayout.propTypes = {
    title: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired,
};

export default NotesListLayout;
