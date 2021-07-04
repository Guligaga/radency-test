import { TOGGLE_POPUP, CHANGE_NOTES_TABLE_TYPE } from "./types";

export function togglePopup(data = {}) {
    return {
        type: TOGGLE_POPUP,
        payload: data
    }
}

export function changeNotesTableType(isArchivedVisible) {
    return {
        type: CHANGE_NOTES_TABLE_TYPE,
        payload: !isArchivedVisible
    }
}