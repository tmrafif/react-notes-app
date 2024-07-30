import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { MdOutlineCheck } from "react-icons/md";
import { addNote } from "../../utils/api";

function SaveNoteButton({ note }) {
    const navigate = useNavigate();

    async function saveNoteHandler({ title, body }) {
        await addNote({ title, body });
        navigate("/");
    }

    return (
        <button
            className="p-3 rounded-xl text-dark bg-primary hover:brightness-75 drop-shadow-lg"
            type="button"
            title="Add Note"
            onClick={() => saveNoteHandler(note)}
        >
            <MdOutlineCheck size="1.5rem" />
        </button>
    );
}

SaveNoteButton.propTypes = {
    note: PropTypes.object.isRequired,
};

export default SaveNoteButton;
