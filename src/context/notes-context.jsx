import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "../reducer/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({children}) => {

    const initialState = {
        title: '',
        text: '',
        notes: [],
        archivedNotes: [],
        deletedNotes: [],
    }

    const [{title, text, notes, archivedNotes, deletedNotes}, notesDispatch] = useReducer(notesReducer, initialState);

    return (
        <NotesContext.Provider value={{title, text, notes, archivedNotes, deletedNotes, notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
