import { TOGGLE_POPUP, CHANGE_NOTES_TABLE_TYPE } from "../actions/types";

const initialState = {
    isArchivedVisible: false,
    popupData: null
};

export default function generalsReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case TOGGLE_POPUP:
            return {...state, popupData: payload};
        case CHANGE_NOTES_TABLE_TYPE:
            return {...state, isArchivedVisible: payload};
        default:
            return state;
    }
}