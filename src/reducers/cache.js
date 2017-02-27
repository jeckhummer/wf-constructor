import {CACHE_TASK_CUSTOM_FIELDS, CACHE_WO_CUSTOM_FIELDS} from "../actions/cache";

const DEFAULT_STATE = {
    taskCustomFields: {},
    WOCustomFields: null
};

export const cache = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case CACHE_TASK_CUSTOM_FIELDS:
            return {
                ...state,
                taskCustomFields: {
                    ...state.taskCustomFields,
                    [action.taskId]: action.fields
                },
            };
        case CACHE_WO_CUSTOM_FIELDS:
            return {
                ...state,
                WOCustomFields: action.fields,
            };
        default:
            return state;
    }
};