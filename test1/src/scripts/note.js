import { upperCaseFirst } from './utils';

function setCategoryName(cat) {
    return cat === 'thought' ? 'Random Thought' : upperCaseFirst(cat);
}

export function createLi(obj) {
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
            <li class="note__item note__item_category">${setCategoryName(category)}</li>
            <li class="note__item note__item_content">${content}</li>
            <li class="note__item note__item_dates-list">${datesList}</li>
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
