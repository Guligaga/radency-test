import { notesList, archivedList, notesTypeSelector } from '../constants';
import { clearObject } from '../utils/utils';

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
    delete archivedList[id];
}

export function archivateNote(id) {
    archivedList[id] = notesList[id];
    delete notesList[id];
}

export function unarchivateNote(id) {
    notesList[id] = archivedList[id];
    delete archivedList[id];
}

export function deleteAllNotes() {
    const isActive = notesTypeSelector.value === 'active';
    const list = isActive ? notesList : archivedList;
    clearObject(list);
}
export function archivateAllNotes() {
    Object.keys(notesList).forEach(key => {
        archivateNote(key);
    });
}
export function unarchivateAllNotes() {
    Object.keys(archivedList).forEach(key => {
        unarchivateNote(key);
    });
}
