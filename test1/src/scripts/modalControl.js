import { createBtn, popup } from './vars';

function lockBody() {
    document.body.classList.toggle('locked');
}

export function toggleModal() {
    popup.classList.toggle('d-none');
    lockBody();
}

export function setModal(fields = { name: '', category: 'task', content: '' }) {
    if (typeof fields !== 'object') {
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
    console.log(document.querySelector('#popup-content').value);
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
