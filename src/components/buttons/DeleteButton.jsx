import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { deleteNote } from "../../utils/api";

function DeleteButton({ id }) {
    const navigate = useNavigate();

    async function deleteNoteHandler(id) {
        await deleteNote(id);
        navigate("/");
    }

    return (
        <button
            className="p-3 rounded-xl text-dark bg-primary hover:brightness-75 drop-shadow-lg"
            type="button"
            title="Delete"
            onClick={() => deleteNoteHandler(id)}
        >
            <MdDeleteOutline size="1.5rem" />
        </button>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.string.isRequired,
};

export default DeleteButton;
