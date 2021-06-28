import { upperCaseFirst } from './utils';
import { notesTable } from './vars';

function presetCategoryName(cat) {
    return cat === 'thought' ? 'Random Thought' : upperCaseFirst(cat);
}

function presetDatesList(list) {
    return list.join(', ');
}

export function createLi(obj) {
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

export function addNoteRender(obj) {
    if (typeof obj !== 'object') {
        throw new Error('Argument type must be an object');
    }
    const li = createLi(obj);
    notesTable.append(li);
}

export function updateNoteRender(obj, id) {
    if (typeof obj !== 'object') {
        throw new Error('Argument type must be an object');
    }
    const noteToUpdate = document.querySelector(`.note[data-id="${id}"]`);
    const li = createLi(obj);
    noteToUpdate.innerHTML = li.innerHTML;
}

export function deleteNoteRender(id) {
    const noteToDelete = document.querySelector(`.note[data-id="${id}"]`);
    noteToDelete.remove();
}
