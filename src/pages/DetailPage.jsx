import React from "react";
import { useParams } from "react-router-dom";

import NoteDetail from "../components/NoteDetail";
import ArchiveButton from "../components/buttons/ArchiveButton";
import DeleteButton from "../components/buttons/DeleteButton";
import { getNote } from "../utils/api";

function DetailPage() {
    const { id } = useParams();
    const [note, setNote] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNote(data);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return null;
    }

    return (
        <section className="px-8 mt-8 md:px-16">
            <NoteDetail note={note} />
            <div className="fixed z-50 flex gap-4 right-10 md:right-16 bottom-8">
                <ArchiveButton id={id} isArchived={note.archived} />
                <DeleteButton id={id} />
            </div>
        </section>
    );
}

export default DetailPage;
