export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export function toggleEditMode() {
    return (dispatch) => {
        dispatch({type: TOGGLE_EDIT_MODE});
    };
}