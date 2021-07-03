import { TOGGLE_POPUP } from "./types";

export function togglePopup(data = {}) {
    return {
        type: TOGGLE_POPUP,
        payload: data
    }
}