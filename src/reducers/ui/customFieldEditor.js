import {
    OPEN_CUSTOM_FIELD_EDITOR,
    CLOSE_CUSTOM_FIELD_EDITOR,
    UPDATE_ACTIVE_CUSTOM_FIELD
} from "../../actions/customFieldEditor";

const DEFAULT_STATE = {
    open: false,
    isNewCustomField: false,
    customField: {}
};

export const customFieldEditor = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case OPEN_CUSTOM_FIELD_EDITOR:
            return {
                ...state,
                open: true,
                customField: action.customField,
                isNewCustomField: action.isNewCustomField
            };
        case CLOSE_CUSTOM_FIELD_EDITOR:
            return DEFAULT_STATE;
        case UPDATE_ACTIVE_CUSTOM_FIELD:
            return {
                ...state,
                customField: {
                    ...state.customField,
                    ...action.diff
                }
            };
        default:
            return state;
    }
};