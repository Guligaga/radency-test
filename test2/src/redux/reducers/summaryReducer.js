import {
    SET_TOTAL_SUMMARY,
} from '../actions/types';

const initialState = {};

export default function summaryReducer(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case SET_TOTAL_SUMMARY:
            return {...payload};
        default:
            return state;
    }
}