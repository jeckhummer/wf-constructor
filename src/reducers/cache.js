import {CACHE_TASK_CUSTOM_FIELDS} from "../actions/cache";
const DEFAULT_STATE = {taskCustomFields: {}};

export const cache = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case CACHE_TASK_CUSTOM_FIELDS:
            return {
                ...state,
                taskCustomFields: {
                    ...state.taskCustomFields,
                    [action.taskId]: action.fields
                }
            };
        default:
            return state;
    }
};