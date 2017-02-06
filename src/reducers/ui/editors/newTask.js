import {OPEN_NEW_TASK_EDITOR, CLOSE_NEW_TASK_EDITOR} from "../../../actions/newTaskEditor";

export const newTask = (state = {}, action) => {
    switch (action.type) {
        case OPEN_NEW_TASK_EDITOR:
            return openNewTaskEditor(state, action.id);
        case CLOSE_NEW_TASK_EDITOR:
            return closeNewTaskEditor(state);
        default:
            return state;
    }
};

function openNewTaskEditor(state, id) {
    return {
        open: true,
        editedTaskId: id
    };
}

function closeNewTaskEditor(state) {
    return {
        open: false
    };
}