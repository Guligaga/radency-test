import { 
    CREATE_NOTE, 
    UPDATE_NOTE, 
    DELETE_NOTE, 
    TOGGLE_NOTE_ARCHIVING,
} from "../actions/types";

const initialState = {
    1: {
        id: 1,
        name: 'Shopping list',
        date: 'April 20, 2021',
        category: 'task',
        content: 'Tomatoes, bread',
        datesList: [],
        isArchived: false,
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
        isArchived: false,
    },
    3: {
        id: 3,
        name: 'New feature',
        date: 'May 05, 2021',
        category: 'idea',
        content: `As a result, the lighter moths became much easier to spot than on 3/5/2021
        the darker ones, making them vulnerable to being eaten by birds on 5/5/2021.`,
        datesList: ['3/5/2021', '5/5/2021'],
        isArchived: false,
    },
    4: {
        id: 4,
        name: 'William Gaddis',
        date: 'May 08, 2021',
        category: 'quote',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, et.',
        datesList: [],
        isArchived: false,
    },
    5: {
        id: 5,
        name: 'Dantist visits',
        date: 'May 15, 2021',
        category: 'task',
        content: 'First visit: 20/05/2021; Second one: 27/05/2021',
        datesList: ['20/05/2021', '27/05/2021'],
        isArchived: false,
    },
    6: {
        id: 6,
        name: 'Flying penguins',
        date: 'May 18, 2021',
        category: 'thought',
        content: 'If penguins could fly, would they migrate to other places?',
        datesList: [],
        isArchived: false,
    },
    7: {
        id: 7,
        name: 'Gaius Julius Caesar',
        date: 'June 1, 2021',
        category: 'quote',
        content: 'Veni, Vidi, Vici',
        datesList: [],
        isArchived: false,
    },
};

export default function notesReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case CREATE_NOTE: 
            return {...state, [payload.id]: payload};
        case UPDATE_NOTE: 
            return {...state, [payload.id]: payload};
        case DELETE_NOTE: 
            return {...payload};
        case TOGGLE_NOTE_ARCHIVING: 
            return {...state, [payload.id]: payload};
        default:
            return state;
    }
}