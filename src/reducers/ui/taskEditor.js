import {
    OPEN_TASK_EDITOR,
    CLOSE_TASK_EDITOR,
    UPDATE_EDITOR_TASK,
    OPEN_TASK_EDITOR_TAB
} from "../../actions/ui";

export const TASK_EDITOR_TABS = {
    GENERAL: 1,
    CUSTOM_FIELDS: 2,
    NOTIFICATIONS: 3
};

const CLOSED_STATE = {
    open: false,
    isNewTask: false,
    activeTab: TASK_EDITOR_TABS.GENERAL,
    task: {},
    valid: true
};

export const taskEditor = (state = CLOSED_STATE, action) => {
    switch (action.type) {
        case OPEN_TASK_EDITOR:
            return openTaskEditor(state, action.isNewTask, action.task);
        case CLOSE_TASK_EDITOR:
            return closeTaskEditor(state);
        case UPDATE_EDITOR_TASK:
            return updateEditorTask(state, action.diff);
        case OPEN_TASK_EDITOR_TAB:
            return openTaskEditorTab(state, action.tab);
        default:
            return state;
    }
};

function openTaskEditor(state, isNewTask, task) {
    return {
        open: true,
        isNewTask,
        activeTab: TASK_EDITOR_TABS.GENERAL,
        task
    };
}

function closeTaskEditor(state) {
    return CLOSED_STATE;
}

function updateEditorTask(state, diff) {
    return {
        ...state,
        task: {
            ...state.task,
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