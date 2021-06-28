import { presetCategoryName } from './utils';

export function createSummaryHeader() {
    const li = document.createElement('li');
    li.classList.add('summary__item', 'summary-header');
    const inner = `
        <ul>
            <li class="summary-header__item summary-header__item_icon"></li>
            <li class="summary-header__item summary-header__item_name">Note Category</li>
            <li class="summary-header__item summary-header__item_active">Active</li>
            <li class="summary-header__item summary-header__item_archived">Archived</li>
        </ul>
    `;
    li.insertAdjacentHTML('afterbegin', inner);
    return li;
}

export function createSummaryItem(obj) {
    const { category, active = 0, archived = 0 } = obj;
    const li = document.createElement('li');
    li.classList.add('summary__item', 'category');
    const inner = `
        <ul>
            <li class="category__item category__item_icon">
                <div class="note-icon">
                    <img src="./assets/icons/${category}.svg" alt="${category}">
                </div>
            </li>
            <li class="category__item category__item_name">${presetCategoryName(category)}</li>
            <li class="category__item category__item_active">${active}</li>
            <li class="category__item category__item_archived">${archived}</li>
        </ul>
    `;
    li.insertAdjacentHTML('afterbegin', inner);
    return li;
}
