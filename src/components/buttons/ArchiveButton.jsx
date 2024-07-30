import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { MdOutlineArchive, MdOutlineUnarchive } from "react-icons/md";
import { archiveNote, unarchiveNote } from "../../utils/api";

function ArchiveButton({ id, isArchived }) {
    const navigate = useNavigate();

    async function archiveNoteHandler(id) {
        await archiveNote(id);
        navigate("/");
    }

    async function unarchiveNoteHandler(id) {
        await unarchiveNote(id);
        navigate("/archives");
    }

    if (isArchived) {
        return (
            <button
                className="p-3 rounded-xl text-dark bg-primary hover:brightness-75 drop-shadow-lg"
                type="button"
                title="Unarchive"
                onClick={() => unarchiveNoteHandler(id)}
            >
                <MdOutlineUnarchive size="1.5rem" />
            </button>
        );
    }

    return (
        <button
            className="p-3 rounded-xl text-dark bg-primary hover:brightness-75 drop-shadow-lg"
            type="button"
            title="Archive"
            onClick={() => archiveNoteHandler(id)}
        >
            <MdOutlineArchive size="1.5rem" />
        </button>
    );
}

ArchiveButton.propTypes = {
    id: PropTypes.string.isRequired,
    isArchived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
