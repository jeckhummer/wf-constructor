export const CACHE_TASK_CUSTOM_FIELDS = 'CACHE_TASK_CUSTOM_FIELDS';
export function cacheTaskCustomFields(taskId, fields) {
    return (dispatch) => {
        dispatch({
            type: CACHE_TASK_CUSTOM_FIELDS,
            fields,
            taskId
        });
    };
}

export const CACHE_WO_CUSTOM_FIELDS = 'CACHE_WO_CUSTOM_FIELDS';
export function cacheWOCustomFields(fields) {
    return (dispatch) => {
        dispatch({
            type: CACHE_WO_CUSTOM_FIELDS,
            fields,
        });
    };
}