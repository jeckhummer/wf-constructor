import {
    OPEN_CUSTOM_FIELD_EDITOR,
    CLOSE_CUSTOM_FIELD_EDITOR
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
        default:
            return state;
    }
};