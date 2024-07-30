import React from "react";
import NotesListLayout from "../components/layouts/NotesListLayout";
import { getActiveNotes } from "../utils/api";
import useLocale from "../hooks/useLocale";

function HomePage() {
    const [activeNotes, setActiveNotes] = React.useState([]);
    const text = useLocale("homePage");

    React.useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setActiveNotes(data);
        });
    }, []);

    return <NotesListLayout title={text.header} notes={activeNotes} />;
}

export default HomePage;
