import { 
    CREATE_NOTE, 
    UPDATE_NOTE, 
    DELETE_NOTE, 
    TOGGLE_NOTE_ARCHIVING,
    DELETE_ALL_NOTES,
    TOGGLE_ALL_NOTES_ARCHIVING,
} from "./types";

function setDate() {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return new Date().toLocaleDateString('en-US', options);
}

function setDatesList(str) {
    const reg = /(\d{1,2}\/){2}\d{4}/g;
    return str.match(reg) || [];
}

export function createNote(data) {
    const { content } = data;
    const id = Date.now();
    const date = setDate();
    const datesList = setDatesList(content);
    const isArchived = false;
    return {
        type: CREATE_NOTE,
        payload: { ...data, id, date, datesList, isArchived }
    };
}

export function updateNote(newData) {
    const { content } = newData;
    const datesList = setDatesList(content);
    return {
        type: UPDATE_NOTE,
        payload: { ...newData, datesList }
    };
}

export function deleteNote(notesList, id) {
    const { [id]: _, ...rest } = notesList;    
    return {
        type: DELETE_NOTE,
        payload: rest,
    }
}

export function toggleNoteArchiving(note) {
    const {isArchived} = note;
    return {
        type: TOGGLE_NOTE_ARCHIVING,
        payload: {...note, isArchived: !isArchived}
    }
}

export function deleteAllNotes() {
    return {
        type: DELETE_ALL_NOTES,
    }
}

export function toggleAllNotesArchiving(notesList, isListArchived) {
    const editedList = Object.values(notesList).reduce((acc, note) => {
        note.isArchived = !isListArchived;
        acc[note.id] = note;
        return acc
    }, {})
    return {
        type: TOGGLE_ALL_NOTES_ARCHIVING,
        payload: editedList
    }
}