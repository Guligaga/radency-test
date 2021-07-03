import {CHANGE_ACTIVE_COUNT, CHANGE_ARCHIVED_COUNT} from '../actions/types';

const initialState = {
    idea: { category: "idea", active: 1, archived: 0},
    quote: { category: "quote", active: 2, archived: 0},
    task: { category: "task", active: 2, archived: 0},
    thought: { category: "thought", active: 2, archived: 0},
};

export default function summaryReducer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_ACTIVE_COUNT:
            return state;
        case CHANGE_ARCHIVED_COUNT:
            return state;
        default:
            return state;
    }
}