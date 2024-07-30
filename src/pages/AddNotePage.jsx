import React from "react";
import SaveNoteButton from "../components/buttons/SaveNoteButton";
import useInput from "../hooks/useInput";

function AddNotePage() {
    const [title, handleTitleChange] = useInput("");
    const [body, handleBodyChange] = useInput("");
    const textbox = React.useRef(null);

    return (
        <section className="px-8 mt-6 md:px-16">
            <div className="flex flex-col gap-4">
                <input
                    className="px-3 py-2 text-xl border rounded-md dark:bg-darker"
                    type="text"
                    placeholder="Note Title ..."
                    value={title}
                    onChange={handleTitleChange}
                />
                <textarea
                    className="px-3 py-2 border rounded-md h-[24rem] dark:bg-darker"
                    ref={textbox}
                    type="text"
                    placeholder="Take a note ..."
                    value={body}
                    onChange={handleBodyChange}
                    style={{ resize: "none" }}
                />
            </div>
            <div className="fixed z-50 right-10 md:right-16 bottom-8">
                <SaveNoteButton note={{ title, body }} />
            </div>
        </section>
    );
}

export default AddNotePage;
