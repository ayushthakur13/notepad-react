export const findNote = (id, notes) => {
    return notes.some(note => note.id === id);
}