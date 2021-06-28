export const notesTable = document.querySelector('.notes-list');
export const notesTypeSelector = document.querySelector('#note-selector');
export const createBtn = document.querySelector('.note-creation__btn');
export const popup = document.querySelector('.popup');
export const popupForm = document.querySelector('.popup__form');

export const notesList = {
    1: {
        id: 1,
        name: 'Shopping list',
        date: 'April 20, 2021',
        category: 'task',
        content: 'Tomatoes, bread',
        datesList: [],
    },
    2: {
        id: 2,
        name: 'The Theory of Evolution',
        date: 'April 21, 2021',
        category: 'thought',
        content: `For example, humans and the fruit fly, Drosophila melanogaster, 
            share much of their DNA. 
            75 per cent of genes that cause diseases in humans are also found in the fruit fly.`,
        datesList: [],
    },
    // 3: {
    //     id: 3,
    //     name: 'New feature',
    //     date: 'May 05, 2021',
    //     category: 'idea',
    //     content: `As a result, the lighter moths became much easier to spot than on 3/5/2021
    //     the darker ones, making them vulnerable to being eaten by birds on 5/5/2021.`,
    //     datesList: ['3/5/2021', '5/5/2021'],
    // },
    // 4: {
    //     id: 4,
    //     name: 'William Gaddis',
    //     date: 'May 08, 2021',
    //     category: 'quote',
    //     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.',
    //     datesList: [],
    // },
    // 5: {
    //     id: 5,
    //     name: 'Dantist visits',
    //     date: 'May 15, 2021',
    //     category: 'task',
    //     content: 'First visit: 20/05/2021; Second one: 27/05/2021',
    //     datesList: ['20/05/2021', '27/05/2021'],
    // },
    // 6: {
    //     id: 6,
    //     name: 'Flying penguins',
    //     date: 'May 18, 2021',
    //     category: 'thought',
    //     content: 'If penguins could fly, would they migrate to other places?',
    //     datesList: [],
    // },
    // 7: {
    //     id: 7,
    //     name: 'Gaius Julius Caesar',
    //     date: 'June 1, 2021',
    //     category: 'quote',
    //     content: 'Veni, Vidi, Vici',
    //     datesList: [],
    // },
};

export const archivatedList = {};
