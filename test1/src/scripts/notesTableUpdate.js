import { notesList } from './vars';
import { createLi } from './note';

const notesTable = document.querySelector('.notes-list');

function startTableSet() {
    const fragment = document.createDocumentFragment();
    Object.values(notesList).forEach(note => {
        const li = createLi(note);
        fragment.append(li);
    });
    notesTable.append(fragment);
}

document.addEventListener('DOMContentLoaded', startTableSet);
