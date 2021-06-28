import { notesList, archivatedList, notesTypeSelector } from './vars';

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
    const id = +Object.keys(notesList).pop() + 1;
    const date = setDate();
    const datesList = setDatesList(content);
    notesList[id] = { ...data, id, date, datesList };
    return notesList[id];
}

export function updateNote(newData, id) {
    const { content } = newData;
    const datesList = setDatesList(content);
    notesList[id] = { ...notesList[id], ...newData, datesList };
    return notesList[id];
}

export function deleteNote(id) {
    delete notesList[id];
    delete archivatedList[id];
}

export function archivateNote(id) {
    archivatedList[id] = notesList[id];
    delete notesList[id];
}

export function unarchivateNote(id) {
    notesList[id] = archivatedList[id];
    delete archivatedList[id];
}

export function deleteAllNotes() {
    const isActive = notesTypeSelector.value === 'active';
    const list = isActive ? notesList : archivatedList;
    Object.keys(list).forEach(prop => {
        delete list[prop];
    });
}
export function archivateAllNotes() {
    Object.keys(notesList).forEach(key => {
        archivateNote(key);
    });
}
export function unarchivateAllNotes() {
    Object.keys(archivatedList).forEach(key => {
        unarchivateNote(key);
    });
}
