import {
    OPEN_TASK_EDITOR,
    CLOSE_TASK_EDITOR,
    UPDATE_EDITED_TASK,
    OPEN_TASK_EDITOR_TAB
} from "../../../actions/taskEditor";

export const TASK_EDITOR_TABS = {
    GENERAL: 1,
    CUSTOM_FIELDS: 2,
    NOTIFICATIONS: 3
};

const CLOSED_STATE = {
    open: false,
    activeTab: TASK_EDITOR_TABS.GENERAL,
    editedTask: {}
};

export const task = (state = CLOSED_STATE, action) => {
    switch (action.type) {
        case OPEN_TASK_EDITOR:
            return openTaskEditor(state, action.editedTask);
        case CLOSE_TASK_EDITOR:
            return closeTaskEditor(state);
        case UPDATE_EDITED_TASK:
            return updateEditedTask(state, action.diff);
        case OPEN_TASK_EDITOR_TAB:
            return openTaskEditorTab(state, action.tab);
        default:
            return state;
    }
};

function openTaskEditor(state, editedTask) {
    return {
        open: true,
        activeTab: TASK_EDITOR_TABS.GENERAL,
        editedTask
    };
}

function closeTaskEditor(state) {
    return CLOSED_STATE;
}

function updateEditedTask(state, diff) {
    return {
        ...state,
        editedTask: {
            ...state.editedTask,
            ...diff
        }
    };
}

function openTaskEditorTab(state, tab) {
    return {
        ...state,
        activeTab: tab
    };
}