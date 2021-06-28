import { notesList } from './vars';
import { upperCaseFirst } from './utils';
import { create, update } from './note';
import { toggleModal, setModal } from './modalControl';

const notesTable = document.querySelector('.notes-list');
const popupForm = document.querySelector('.popup__form');

let noteId = 0;

function presetCategoryName(cat) {
    return cat === 'thought' ? 'Random Thought' : upperCaseFirst(cat);
}

function presetDatesList(list) {
    return list.join(', ');
}

function createLi(obj) {
    const { id, name, date, category, content, datesList } = obj;
    const li = document.createElement('li');
    li.classList.add('notes-list__item', 'note');
    li.dataset.id = id;
    const inner = `
        <ul>
            <li class="note__item  note__item_icon">
                <div class="note-icon">
                    <img src="./assets/icons/${category}.svg" alt="${category}">
                </div>
            </li>
            <li class="note__item note__item_name">${name}</li>
            <li class="note__item note__item_date">${date}</li>
            <li class="note__item note__item_category">${presetCategoryName(category)}</li>
            <li class="note__item note__item_content">${content}</li>
            <li class="note__item note__item_dates-list">${presetDatesList(datesList)}</li>
            <li class="note__item note__item_actions actions">
                <div class="list-action">
                    <button type="button" data-action="edit">
                        <img src="./assets/icons/edit.svg" alt="edit">
                    </button>
                </div>
                <div class="list-action">
                    <button type="button" data-action="archivate">
                        <img src="./assets/icons/archivate.svg" alt="archivate">
                    </button>
                </div>
                <div class="list-action">
                    <button type="button" data-action="delete">
                        <img src="./assets/icons/delete.svg" alt="delete">
                    </button>
                </div>
            </li>
        </ul>
    `;
    li.insertAdjacentHTML('afterbegin', inner);
    return li;
}

function startTableRender() {
    const fragment = document.createDocumentFragment();
    Object.values(notesList).forEach(note => {
        const li = createLi(note);
        fragment.append(li);
    });
    notesTable.append(fragment);
}

document.addEventListener('DOMContentLoaded', startTableRender);

// create

function addNoteRender(obj) {
    if (typeof obj !== 'object') {
        throw new Error('Argument type must be an object');
    }
    const li = createLi(obj);
    notesTable.append(li);
}

// update

notesTable.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.dataset.action !== 'edit') {
        return;
    }
    noteId = e.target.closest('.note').dataset.id;

    const popup = popupForm.closest('div');
    toggleModal(popup);
    setModal(notesList[noteId]);
});

function updateNoteRender(obj) {
    const noteToUpdate = document.querySelector(`.note[data-id="${noteId}"]`);
    console.log(noteToUpdate);
    if (typeof obj !== 'object') {
        throw new Error('Argument type must be an object');
    }
    const li = createLi(obj);
    noteToUpdate.innerHTML = li.innerHTML;
}

popupForm.addEventListener('submit', e => {
    e.preventDefault();
    try {
        const popup = popupForm.closest('div');
        const formData = new FormData(popupForm);
        const formDataObj = Object.fromEntries(formData);

        if (popup.dataset.action === 'create') {
            const noteObj = create(formDataObj);
            addNoteRender(noteObj);
        } else {
            const noteObj = update(formDataObj, noteId);
            updateNoteRender(noteObj);
        }

        toggleModal(popup);
    } catch (err) {
        console.error(err);
    }
});
