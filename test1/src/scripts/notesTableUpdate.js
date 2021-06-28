import { notesList, notesTable, popupForm, popup, notesTypeSelector, archivedList } from './vars';
import {
    createNote,
    updateNote,
    deleteNote,
    archivateNote,
    unarchivateNote,
    deleteAllNotes,
    archivateAllNotes,
    unarchivateAllNotes,
} from './note';
import { toggleModal, setModal } from './modalControl';
import {
    addNoteRender,
    updateNoteRender,
    deleteNoteRender,
    createNotesHeader,
    createNoteLi,
    clearTableRender,
} from './noteRender';
import { incSingleSummary, decSingleSummary, setSummaryTotal } from './summary';
import { updateSummaryRender } from './summaryRender';

let noteId = 0;

function notesTableRender() {
    const fragment = document.createDocumentFragment();
    const header = createNotesHeader(true);
    fragment.append(header);
    Object.values(notesList).forEach(note => {
        const li = createNoteLi(note, true);
        fragment.append(li);
    });
    notesTable.innerHTML = '';
    notesTable.append(fragment);
}

function archivedTableRender() {
    const fragment = document.createDocumentFragment();
    const header = createNotesHeader(false);
    fragment.append(header);
    Object.values(archivedList).forEach(note => {
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

    decSingleSummary(notesList[noteId].category, notesTypeSelector.value);
    updateSummaryRender();

    deleteNote(noteId);
    deleteNoteRender(noteId);
});

notesTable.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.dataset.action !== 'archivate') {
        return;
    }
    noteId = e.target.closest('.note').dataset.id;

    decSingleSummary(notesList[noteId].category, 'active');
    incSingleSummary(notesList[noteId].category, 'archived');
    updateSummaryRender();

    archivateNote(noteId);
    deleteNoteRender(noteId);
});

notesTable.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.dataset.action !== 'unarchivate') {
        return;
    }
    noteId = e.target.closest('.note').dataset.id;

    const currentNote = notesList[noteId] || archivedList[noteId];

    decSingleSummary(currentNote.category, 'archived');
    incSingleSummary(currentNote.category, 'active');
    updateSummaryRender();

    unarchivateNote(noteId);
    deleteNoteRender(noteId);
});

notesTable.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.dataset.action !== 'deleteAll') {
        return;
    }
    deleteAllNotes();
    clearTableRender();

    setSummaryTotal();
    updateSummaryRender();
});

notesTable.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.dataset.action !== 'archivateAll') {
        return;
    }
    archivateAllNotes();
    clearTableRender();

    setSummaryTotal();
    updateSummaryRender();
});

notesTable.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.dataset.action !== 'unarchivateAll') {
        return;
    }
    unarchivateAllNotes();
    clearTableRender();

    setSummaryTotal();
    updateSummaryRender();
});

notesTypeSelector.addEventListener('change', e => {
    const type = e.target.value;
    if (type === 'active') {
        notesTableRender();
    } else {
        archivedTableRender();
    }
});

popupForm.addEventListener('submit', e => {
    e.preventDefault();
    try {
        const formData = new FormData(popupForm);
        const formDataObj = Object.fromEntries(formData);
        let noteObj = null;

        if (popup.dataset.action === 'create') {
            noteObj = createNote(formDataObj);
            addNoteRender(noteObj);
        } else {
            decSingleSummary(notesList[noteId].category, 'active');

            noteObj = updateNote(formDataObj, noteId);
            updateNoteRender(noteObj, noteId);
        }

        incSingleSummary(noteObj.category, 'active');
        updateSummaryRender();

        toggleModal(popup);
    } catch (err) {
        console.error(err);
    }
});
