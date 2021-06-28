import { notesList, notesTable, popupForm, popup } from './vars';
import { create, update } from './note';
import { toggleModal, setModal } from './modalControl';
import { addNoteRender, updateNoteRender, createLi } from './noteRender';

let noteId = 0;

function startTableRender() {
    const fragment = document.createDocumentFragment();
    Object.values(notesList).forEach(note => {
        const li = createLi(note);
        fragment.append(li);
    });
    notesTable.append(fragment);
}

document.addEventListener('DOMContentLoaded', startTableRender);

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

popupForm.addEventListener('submit', e => {
    e.preventDefault();
    try {
        const formData = new FormData(popupForm);
        const formDataObj = Object.fromEntries(formData);

        if (popup.dataset.action === 'create') {
            const noteObj = create(formDataObj);
            addNoteRender(noteObj);
        } else {
            const noteObj = update(formDataObj, noteId);
            updateNoteRender(noteObj, noteId);
        }

        toggleModal(popup);
    } catch (err) {
        console.error(err);
    }
});
