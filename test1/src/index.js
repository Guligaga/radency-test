import './style.scss';

const popup = document.querySelector('.popup');
const createBtn = document.querySelector('.note-creation__btn');

function toggleModal() {
    popup.classList.toggle('d-none');
}

function setModal(fields) {
    if (typeof fields !== 'object') {
        return new Error('Argument type must be an object');
    }
    const fieldsContentTargets = {
        name: 'value',
        category: 'value',
        content: 'textContent',
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
    toggleModal();
});

popup.addEventListener('click', e => {
    if (e.target.classList.contains('popup')) {
        toggleModal();
    }
});
