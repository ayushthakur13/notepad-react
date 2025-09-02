import { Navbar } from "../../components/Navbar"
import { NotesCard } from "../../components/NotesCard"
import { Sidebar } from "../../components/Sidebar"
import { useNotes } from "../../context/notes-context"
import { Footer } from "../../components/Footer"

export const Archive = () => {

    const { archivedNotes } = useNotes();

    return (
        <>
            <Navbar />
            <main className="flex gap-3 min-h-screen overflow-x-hidden">
                <Sidebar />
                <div className="flex flex-col flex-1">
                    {
                        archivedNotes?.length > 0 ? (
                            <>
                            <h3 className="">Archived Notes</h3>
                            <div className="flex flex-wrap gap-4">
                                {archivedNotes.map(({ id, title, text, isPinned }) => (
                                    <NotesCard
                                        key={id}
                                        id={id}
                                        title={title}
                                        text={text}
                                        isPinned={isPinned}
                                    />
                                ))}
                            </div>
                            </>
                        ) : <p>No archived notes</p>
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}
