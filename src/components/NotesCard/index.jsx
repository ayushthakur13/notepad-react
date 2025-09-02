import { useNotes } from "../../context/notes-context"
import { findNote } from "../../utils/findNote";

export const NotesCard = ({id, title, text, isPinned}) => {

    const { notesDispatch, archivedNotes, deletedNotes } = useNotes();

    const isNoteInArchive = findNote(id, archivedNotes);
    const isNoteInDelete = findNote(id, deletedNotes);

    const onPinClick = (id) => {
        notesDispatch({
            type: 'PIN',
            payload: { id }
        })
    }

    const onArchiveClick = (id) => {
        !isNoteInArchive ? notesDispatch({
            type: 'ARCHIVE',
            payload: { id }
        }) : notesDispatch({
            type: 'UNARCHIVE',
            payload: { id }
        })
    }

    const onDeleteClick = (id) => {
        !isNoteInDelete ? notesDispatch({
            type: 'DELETE',
            payload: { id }
        }) : notesDispatch({
            type: 'PERMANENT_DELETE',
            payload: { id }
        })
    }

    const onRestoreClick = (id) => {
        notesDispatch({
            type: 'RESTORE',
            payload: { id }
        })
    }

    return (
        <div key={id} className="w-64 border border-neutral-800 p-2 rounded-md">
            <div className="flex justify-between">
                <p className="break-all">{title}</p>
                {
                    !isNoteInArchive && !isNoteInDelete ? <button onClick={() => onPinClick(id)} className="hover:cursor-pointer">
                        <span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>push_pin</span>
                    </button> : <></>
                }
            </div>
            <hr />
            <div className="flex flex-col">
                <p className="break-all">{text}</p>
                <div className="ml-auto">
                    {
                        isNoteInDelete ? <button onClick={() => onRestoreClick(id)} className="hover:cursor-pointer">
                            <span className={"material-icons-outlined"}>restore_from_trash</span>
                        </button> : <button onClick={() => onArchiveClick(id)} className="hover:cursor-pointer">
                            <span className={isNoteInArchive ? "material-icons" : "material-icons-outlined"}>archive</span>
                        </button>
                    }
                    <button onClick={() => onDeleteClick(id)} className="hover:cursor-pointer">
                        <span className={isNoteInDelete ? "material-icons" : "material-icons-outlined"}>delete</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
