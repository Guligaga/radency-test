import { 
    CREATE_NOTE, 
    UPDATE_NOTE, 
    DELETE_NOTE, 
    ARCHIVATE_NOTE, 
    UNARCHIVATE_NOTE, 
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

export function archivateNote(note) {
    return {
        type: ARCHIVATE_NOTE,
        payload: {...note, archived: true}
    }
}

export function unarchivateNote(note) {
    return {
        type: UNARCHIVATE_NOTE,
        payload: {...note, archived: false}
    }
}