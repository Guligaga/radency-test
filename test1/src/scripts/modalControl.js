const createBtn = document.querySelector('.note-creation__btn');
const popup = document.querySelector('.popup');

function lockBody() {
    document.body.classList.toggle('locked');
}

export function toggleModal(modal) {
    if (modal instanceof Element) {
        modal.classList.toggle('d-none');
        lockBody();
    } else {
        throw new Error('Modal is not a DOM Element');
    }
}

export function setModal(fields = {}) {
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
    try {
        popup.dataset.action = 'create';
        toggleModal(popup);
    } catch (err) {
        console.error(err);
    }
});

popup.addEventListener('click', e => {
    if (e.target.classList.contains('popup')) {
        try {
            toggleModal(popup);
        } catch (err) {
            console.error(err);
        }
    }
});
