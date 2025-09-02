import { v4 as uuid } from 'uuid'

export const notesReducer = (state, {type, payload}) => {
    switch(type){
        case 'TITLE':
            return {
                ...state,
                title: payload
            }
        
        case 'TEXT':
            return {
                ...state,
                text: payload
            }
        
        case 'ADD_NOTE':
            return {
                ...state,
                notes: [...state.notes, { text: state.text, title: state.title, id:uuid(), isPinned: false }]
            }
        
        case 'CLEAR_INPUT':
            return {
                ...state,
                title:'',
                text: '',
            }
        
        case 'PIN':
            return {
                ...state,
                notes: state.notes.map(note => 
                    note.id === payload.id 
                        ? { ...note, isPinned: !note.isPinned } 
                        : note
                    )
            }
        
        case 'ARCHIVE':
            return {
                ...state,
                archivedNotes: [...state.archivedNotes, state.notes.find(({id}) => id === payload.id)],
                notes: state.notes.filter(({id}) => id !== payload.id)
            }
        
        case 'UNARCHIVE':
            return {
                ...state,
                notes: [...state.notes, state.archivedNotes.find(({id}) => id === payload.id)],
                archivedNotes: state.archivedNotes.filter(({id}) => id !== payload.id)
            }
        
        case 'DELETE':

            const noteFromNotes = state.notes.find(note => note.id === payload.id);
            const noteFromArchive = state.archivedNotes.find(note => note.id === payload.id);

            const noteToDelete = noteFromNotes || noteFromArchive;
            
            return {
                ...state,
                deletedNotes: noteToDelete ? [...state.deletedNotes, noteToDelete] : state.deletedNotes,
                notes: state.notes.filter(({id}) => id !== payload.id),
                archivedNotes: state.archivedNotes.filter(({id}) => id !== payload.id),
            }

        case 'PERMANENT_DELETE':
            return {
                ...state,
                deletedNotes: state.deletedNotes.filter(({id}) => id !== payload.id)
            }
        
        case 'RESTORE':
            return {
                ...state,
                notes: [...state.notes, state.deletedNotes.find(({id}) => id === payload.id)],
                deletedNotes: state.deletedNotes.filter(({id}) => id !== payload.id)
            }
        
        default:
            return state
    }
}
