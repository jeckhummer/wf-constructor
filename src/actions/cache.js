export const CACHE_TASK_CUSTOM_FIELDS = 'CACHE_TASK_CUSTOM_FIELDS';
export function cacheTaskCustomFields(taskId, fields) {
    return (dispatch, getState) => {

        dispatch({
            type: CACHE_TASK_CUSTOM_FIELDS,
            fields,
            taskId
        });
    };
}