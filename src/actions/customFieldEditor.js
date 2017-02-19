import {getTaskEditorState} from "../selectors/ui";
import {DEFAULT_CUSTOM_FIELD_LABEL} from "../constants";

export const OPEN_CUSTOM_FIELD_EDITOR = 'OPEN_CUSTOM_FIELD_EDITOR';
export function openCustomFieldEditorForEdit(order) {
    return (dispatch, getState) => {
        const state = getState();
        const customField = getTaskEditorState(state).customFields[order];

        dispatch({
            type: OPEN_CUSTOM_FIELD_EDITOR,
            isNewCustomField: false,
            customField
        });
    };
}

export function openCustomFieldEditorForAdding() {
    return (dispatch) => {
        dispatch({
            type: OPEN_CUSTOM_FIELD_EDITOR,
            isNewCustomField: true,
            customField: {
                label: DEFAULT_CUSTOM_FIELD_LABEL
            }
        });
    };
}

export const CLOSE_CUSTOM_FIELD_EDITOR = 'CLOSE_CUSTOM_FIELD_EDITOR';
export function closeCustomFieldEditor() {
    return (dispatch) => {
        dispatch({type: CLOSE_CUSTOM_FIELD_EDITOR});
    };
}