import {getWOEditorState} from "../selectors/ui";

export const SAVE_WO = 'SAVE_WO';
export function saveWO(WO) {
    return (dispatch) => {
        dispatch({
            type: SAVE_WO,
            WO
        });
    };
}

export function saveWOFromEditor() {
    return (dispatch, getState) => {
        const state = getState();
        const {WO} = getWOEditorState(state);

        dispatch(saveWO(WO));
    };
}
