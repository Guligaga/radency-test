import { notesList, notesTable, popupForm, popup, notesTypeSelector, archivatedList } from './vars';
import { createNote, updateNote, deleteNote, archivateNote, unarchivateNote } from './note';
import { toggleModal, setModal } from './modalControl';
import {
    addNoteRender,
    updateNoteRender,
    deleteNoteRender,
    createNotesHeader,
    createNoteLi,
} from './noteRender';

let noteId = 0;

function notesTableRender() {
    const fragment = document.createDocumentFragment();
    const header = createNotesHeader();
    fragment.append(header);
    Object.values(notesList).forEach(note => {
        const li = createNoteLi(note, true);
        fragment.append(li);
    });
    notesTable.innerHTML = '';
    notesTable.append(fragment);
}
function archivatedTableRender() {
    const fragment = document.createDocumentFragment();
    const header = createNotesHeader();
    fragment.append(header);
    Object.values(archivatedList).forEach(note => {
        const li = createNoteLi(note, false);
        fragment.append(li);
    });
    notesTable.innerHTML = '';
    notesTable.append(fragment);
}

document.addEventListener('DOMContentLoaded', notesTableRender);

notesTable.addEventListener('click', e => {
    const opened = document.querySelector('.note__content.active');
    const note = e.target.closest('.note');
    if (opened && opened.closest('.note') !== note) {
        opened.classList.remove('active');
    }
    if (note) {
        const fullContent = note.querySelector('.note__content');
        fullContent.classList.toggle('active');
    }
});

notesTable.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.dataset.action !== 'edit') {
        return;
    }
    noteId = e.target.closest('.note').dataset.id;

    popup.dataset.action = 'edit';
    toggleModal(popup);
    setModal(notesList[noteId]);
});

notesTable.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.dataset.action !== 'delete') {
        return;
    }
    noteId = e.target.closest('.note').dataset.id;
    deleteNote(noteId);
    deleteNoteRender(noteId);
});

notesTable.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.dataset.action !== 'archivate') {
        return;
    }
    noteId = e.target.closest('.note').dataset.id;
    archivateNote(noteId);
    deleteNoteRender(noteId);
});

notesTable.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.dataset.action !== 'unarchivate') {
        return;
    }
    noteId = e.target.closest('.note').dataset.id;
    unarchivateNote(noteId);
    deleteNoteRender(noteId);
});

notesTypeSelector.addEventListener('change', e => {
    const type = e.target.value;
    if (type === 'active') {
        notesTableRender();
    } else {
        archivatedTableRender();
    }
});

popupForm.addEventListener('submit', e => {
    e.preventDefault();
    try {
        const formData = new FormData(popupForm);
        const formDataObj = Object.fromEntries(formData);

        if (popup.dataset.action === 'create') {
            const noteObj = createNote(formDataObj);
            addNoteRender(noteObj);
        } else {
            const noteObj = updateNote(formDataObj, noteId);
            updateNoteRender(noteObj, noteId);
        }

        toggleModal(popup);
    } catch (err) {
        console.error(err);
    }
});
