import { createBtn, popup } from '../constants';
import { isObject } from '../utils/utils';

function lockBody() {
    document.body.classList.toggle('locked');
}

export function toggleModal() {
    popup.classList.toggle('d-none');
    lockBody();
}

export function setModal(fields = { name: '', category: 'task', content: '' }) {
    if (!isObject(fields)) {
        throw new Error('Argument type must be an object');
    }
    const fieldsContentTargets = {
        name: 'value',
        category: 'value',
        content: 'value',
    };
    Object.entries(fields)
        .filter(([key]) => Object.hasOwnProperty.call(fieldsContentTargets, key))
        .forEach(([key, value]) => {
            const field = document.querySelector(`#popup-${key}`);
            const target = fieldsContentTargets[key];
            field[target] = value;
        });
}

createBtn.addEventListener('click', () => {
    try {
        popup.dataset.action = 'create';
        toggleModal();
        setModal();
    } catch (err) {
        console.error(err);
    }
});

popup.addEventListener('click', e => {
    if (e.target.classList.contains('popup')) {
        try {
            toggleModal();
        } catch (err) {
            console.error(err);
        }
    }
});
