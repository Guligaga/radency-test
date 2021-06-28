const createBtn = document.querySelector('.note-creation__btn');
const popup = document.querySelector('.popup');

function lockBody() {
    document.body.classList.toggle('locked');
}

export function toggleModal(modal) {
    modal.classList.toggle('d-none');
    lockBody();
}

function setModal(fields = {}) {
    if (typeof fields !== 'object') {
        throw new Error('Argument type must be an object');
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
    toggleModal(popup);
    try {
        setModal({
            name: 'Test',
            category: 'task',
            content: 'test 11:36',
            id: 1,
            date: '21 April, 2021',
        });
    } catch (err) {
        console.error(err);
    }
});

popup.addEventListener('click', e => {
    if (e.target.classList.contains('popup')) {
        toggleModal(popup);
    }
});
