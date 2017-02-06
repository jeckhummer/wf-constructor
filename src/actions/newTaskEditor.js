export const OPEN_NEW_TASK_EDITOR = 'SHOW_NEW_TASK_EDITOR';
export function openNewTaskEditor() {
    return (dispatch) => {
        dispatch({type: OPEN_NEW_TASK_EDITOR});
    };
}

export const CLOSE_NEW_TASK_EDITOR = 'CLOSE_NEW_TASK_EDITOR';
export function closeNewTaskEditor() {
    return (dispatch) => {
        dispatch({type: CLOSE_NEW_TASK_EDITOR});
    };
}