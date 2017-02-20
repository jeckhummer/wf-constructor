import {getTaskEditorState, getCustomFieldEditorActiveCustomField} from "../selectors/ui";
import {DEFAULT_CUSTOM_FIELD_LABEL, CUSTOM_FIELD_TYPES} from "../constants";

export const OPEN_CUSTOM_FIELD_EDITOR = 'OPEN_CUSTOM_FIELD_EDITOR';
export function openCustomFieldEditorForEdit(id) {
    return (dispatch, getState) => {
        const state = getState();
        const customField = getTaskEditorState(state).customFields
            .find(field => field.id === id);

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

export const UPDATE_ACTIVE_CUSTOM_FIELD = 'UPDATE_ACTIVE_CUSTOM_FIELD';
export function updateActiveCustomField(diff) {
    return (dispatch) => {
        dispatch({
            type: UPDATE_ACTIVE_CUSTOM_FIELD,
            diff
        });
    };
}

export function updateActiveCustomFieldData(diff) {
    return (dispatch, getState) => {
        const state = getState();
        const field = getCustomFieldEditorActiveCustomField(state);
        const data = CUSTOM_FIELD_TYPES[field.typeId].dataProcessor({
            ...field.data,
            ...diff
        });

        dispatch(updateActiveCustomField({...field, data}));
    };
}

export function updateActiveCustomFieldType(typeId) {
    return (dispatch, getState) => {
        const state = getState();
        const field = getCustomFieldEditorActiveCustomField(state);
        const processedData = CUSTOM_FIELD_TYPES[typeId].dataProcessor(field.data);
        const data = {
            ...field.data,
            ...processedData
        };

        dispatch(updateActiveCustomField({ ...field, typeId, data}));
    };
}

// export function save