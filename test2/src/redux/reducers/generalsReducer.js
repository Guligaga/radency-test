import { TOGGLE_POPUP } from "../actions/types";

const initialState = {
    showArchivedNotes: false,
    popupData: null
};

export default function generalsReducer(state = initialState, action) {
    const {type, payload} = action;
    switch (type) {
        case TOGGLE_POPUP:
            return {...state, popupData: payload}
        default:
            return state;
    }
}