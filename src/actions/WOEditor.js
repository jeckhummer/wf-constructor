import {getWO} from "../selectors/WO";

export const OPEN_WO_EDITOR = 'OPEN_WO_EDITOR';
export function openWOEditor() {
    return (dispatch, getState) => {
        const state = getState();
        const WO = getWO(state);

        dispatch({
            type: OPEN_WO_EDITOR,
            WO
        });
    };
}

export const CLOSE_WO_EDITOR = 'CLOSE_WO_EDITOR';
export function closeWOEditor() {
    return (dispatch) => {
        dispatch({
            type: CLOSE_WO_EDITOR,
        });
    };
}

export const OPEN_WO_EDITOR_TAB = 'OPEN_WO_EDITOR_TAB';
export function openWOEditorTab(tab) {
    return (dispatch) => {
        dispatch({
            type: OPEN_WO_EDITOR_TAB,
            tab
        });
    };
}

export const UPDATE_EDITOR_WO = 'UPDATE_EDITOR_WO';
export function updateWOEditorWO(diff) {
    return (dispatch) => {
        dispatch({type: UPDATE_EDITOR_WO, diff});
    };
}