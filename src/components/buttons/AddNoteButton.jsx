import React from "react";
import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

function AddNoteButton() {
    return (
        <Link to="/notes/new">
            <button className="p-3 rounded-xl text-dark bg-primary hover:brightness-75 drop-shadow-lg">
                <MdAdd size="1.5rem" />
            </button>
        </Link>
    );
}

export default AddNoteButton;
