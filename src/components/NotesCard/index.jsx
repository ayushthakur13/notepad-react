import { useNotes } from "../../context/notes-context"

export const NotesCard = ({id, title, text, isPinned}) => {

    const { notesDispatch } = useNotes();

    const onPinClick = (id) => {
        notesDispatch({
            type: 'PIN',
            payload: { id }
        })
    }

    return (
        <div key={id} className="w-64 border border-neutral-800 p-2 rounded-md">
            <div className="flex justify-between">
                <p>{title}</p>
                <button onClick={() => onPinClick(id)} className="hover:cursor-pointer">
                    <span className={isPinned ? 'material-icons' : 'material-icons-outlined'}>push_pin</span>
                </button>
            </div>
            <hr />
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto">
                    <button className="hover:cursor-pointer">
                        <span className="material-icons-outlined">archive</span>
                    </button>
                    <button className="hover:cursor-pointer">
                        <span className="material-icons-outlined">delete_outline</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
