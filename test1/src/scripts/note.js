import { notesList } from './vars';

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

export function create(data) {
    const { content } = data;
    const id = +Object.keys(notesList).pop() + 1;
    const date = setDate();
    const datesList = setDatesList(content);
    notesList[id] = { id, date, datesList, ...data };
    return notesList[id];
}
