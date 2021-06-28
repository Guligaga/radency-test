import { notesList } from './vars';
import { upperCaseFirst } from './utils';
import { create } from './note';
import { toggleModal } from './modalControl';

const notesTable = document.querySelector('.notes-list');
const popupForm = document.querySelector('.popup__form');

function presetCategoryName(cat) {
    return cat === 'thought' ? 'Random Thought' : upperCaseFirst(cat);
}

function presetDatesList(list) {
    return list.join(', ');
}

function createLi(obj) {
    const { name, date, category, content, datesList } = obj;
    const li = document.createElement('li');
    li.classList.add('notes-list__item', 'note');
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
                    <button type="button">
                        <img src="./assets/icons/edit.svg" alt="edit">
                    </button>
                </div>
                <div class="list-action">
                    <button type="button">
                        <img src="./assets/icons/archivate.svg" alt="archivate">
                    </button>
                </div>
                <div class="list-action">
                    <button type="button">
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

function addNoteRender(obj) {
    const li = createLi(obj);
    notesTable.append(li);
}

popupForm.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(popupForm);
    const formDataObj = Object.fromEntries(formData);

    const noteObj = create(formDataObj);
    addNoteRender(noteObj);
    toggleModal(popupForm.closest('div'));
});
