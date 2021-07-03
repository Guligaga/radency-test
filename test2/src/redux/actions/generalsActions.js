import { TOGGLE_POPUP } from "./types";

export function togglePopup(type) {
    return {
        type: TOGGLE_POPUP,
        payload: type
    }
}