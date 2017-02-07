import {TOGGLE_EDIT_MODE} from "../../actions/ui";

export const editMode = (state = true, action) => {
    switch (action.type) {
        case TOGGLE_EDIT_MODE:
            return !state;
        default:
            return state;
    }
};