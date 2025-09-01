import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";

export const Home = () => {

    const { title, text, notes, notesDispatch } = useNotes();

    const onTitleChange = (ev) => {
        notesDispatch({
            type: 'TITLE',
            payload: ev.target.value
        })
    }

    const onTextChange = (ev) => {
        notesDispatch({
            type: 'TEXT',
            payload: ev.target.value
        })
    }

    const onAddClick = () => {
        notesDispatch({
            type: 'ADD_NOTE',
        })
        notesDispatch({
            type: 'CLEAR_INPUT'
        })
    }

    console.log(notes);

    const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
    const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="flex flex-col w-screen">
                    <div className="mt-12 flex flex-col self-center w-[450px] relative">
                        <input value={title} onChange={onTitleChange} className="bg-white border border-neutral-800 rounded-t-md border-b-0 p-1 focus:outline-none" placeholder="Enter title" />            
                        <textarea value={text} onChange={onTextChange} className="bg-white h-[100px] border border-neutral-800 rounded-b-md border-t-0 p-1 focus:outline-none" placeholder="Enter text" />
                        <button onClick={onAddClick} disabled={title.length === 0}
                        className="w-7 h-7 absolute bottom-0 right-0 bg-indigo-950 text-slate-50 rounded-full hover:cursor-pointer">
                            <span className="material-icons">add</span>
                        </button>
                    </div>

                    <div className="mt-14 ml-10">
                        {pinnedNotes.length > 0 ? (
                            <>
                            <h3 className="">Pinned Notes</h3>
                            <div className="flex flex-wrap gap-4">
                                {pinnedNotes.map(({ id, title, text, isPinned }) => (
                                <NotesCard
                                    key={id}
                                    id={id}
                                    title={title}
                                    text={text}
                                    isPinned={isPinned}
                                />
                                ))}
                            </div>

                            <h3 className="mt-7">Other Notes</h3>
                            {otherNotes.length > 0 ? (
                                <div className="flex flex-wrap gap-4">
                                {otherNotes.map(({ id, title, text, isPinned }) => (
                                    <NotesCard
                                    key={id}
                                    id={id}
                                    title={title}
                                    text={text}
                                    isPinned={isPinned}
                                    />
                                ))}
                                </div>
                            ) : (
                                <p>No other notes</p>
                            )}
                            </>
                        ) : (
                            <>
                            {otherNotes.length > 0 ? (
                                <div className="flex flex-wrap gap-4">
                                {otherNotes.map(({ id, title, text, isPinned }) => (
                                    <NotesCard
                                    key={id}
                                    id={id}
                                    title={title}
                                    text={text}
                                    isPinned={isPinned}
                                    />
                                ))}
                                </div>
                            ) : (
                                <p>No notes yet</p>
                            )}
                            </>
                        )}
                        </div>

                </div>
            </main>
        </>
    )
}
