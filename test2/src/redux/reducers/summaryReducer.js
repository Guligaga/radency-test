import {} from '../actions/types';

const initialState = {
    idea: { category: "idea", active: 1, archived: 0},
    quote: { category: "quote", active: 2, archived: 0},
    task: { category: "task", active: 2, archived: 0},
    thought: { category: "thought", active: 2, archived: 0},
};

export default function summaryReducer(state = initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}