import { upperCaseFirst } from './utils';
import { notesTable, notesTypeSelector } from './vars';

function presetCategoryName(cat) {
    return cat === 'thought' ? 'Random Thought' : upperCaseFirst(cat);
}

function presetDatesList(list) {
    return list.join(', ');
}

export function createNotesHeader() {
    const li = document.createElement('li');
    li.classList.add('notes-list__item', 'header');
    const inner = `
        <ul>
            <li class="header__item header__item_icon"></li>
            <li class="header__item header__item_name">Name</li>
            <li class="header__item header__item_date">Created</li>
            <li class="header__item header__item_category">Category</li>
            <li class="header__item header__item_content">Content</li>
            <li class="header__item header__item_dates-list">Dates</li>
            <li class="header__item header__item_actions actions">
                <div class="list-action">
                    <button type="button" data-action="archivateAll">
                        <img src="./assets/icons/archivate-white.svg" alt="archivateAll">
                    </button>
                </div>
                <div class="list-action">
                    <button type="button" data-action="deleteAll">
                        <img src="./assets/icons/delete-white.svg" alt="deleteAll">
                    </button>
                </div>
            </li>
        </ul>
    `;
    li.insertAdjacentHTML('afterbegin', inner);
    return li;
}

export function createNoteLi(obj, isActive) {
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
                ${
                    isActive
                        ? `
                    <div class="list-action">
                        <button type="button" data-action="edit">
                            <img src="./assets/icons/edit.svg" alt="edit">
                        </button>
                    </div>
                    `
                        : ''
                }
                <div class="list-action">
                    <button type="button" data-action="${isActive ? 'archivate' : 'unarchivate'}">
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
        <p class="note__content">${content}</p>
    `;
    li.insertAdjacentHTML('afterbegin', inner);
    return li;
}

export function addNoteRender(obj) {
    if (typeof obj !== 'object') {
        throw new Error('Argument type must be an object');
    }
    if (notesTypeSelector.value === 'active') {
        const li = createNoteLi(obj, true);
        notesTable.append(li);
    }
}

export function updateNoteRender(obj, id) {
    if (typeof obj !== 'object') {
        throw new Error('Argument type must be an object');
    }
    const noteToUpdate = document.querySelector(`.note[data-id="${id}"]`);
    const li = createNoteLi(obj, true);
    noteToUpdate.innerHTML = li.innerHTML;
}

export function deleteNoteRender(id) {
    const noteToDelete = document.querySelector(`.note[data-id="${id}"]`);
    noteToDelete.remove();
}
