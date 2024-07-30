import React from "react";
import NotesListLayout from "../components/layouts/NotesListLayout";
import { getArchivedNotes } from "../utils/api";
import useLocale from "../hooks/useLocale";

function ArchivePage() {
    const [archivedNotes, setArchivedNotes] = React.useState([]);
    const text = useLocale("archivePage");

    React.useEffect(() => {
        getArchivedNotes().then(({ data }) => {
            setArchivedNotes(data);
        });
    }, []);

    return <NotesListLayout title={text.header} notes={archivedNotes} />;
}

export default ArchivePage;
