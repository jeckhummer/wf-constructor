import {
    OPEN_TASK_EDITOR,
    CLOSE_TASK_EDITOR,
    UPDATE_EDITOR_TASK,
    OPEN_TASK_EDITOR_TAB,
    SELECT_CUSTOM_FIELD, SET_CUSTOM_FIELDS_LOADING_ANIMATION_VISIBILITY, SET_CUSTOM_FIELDS, DELETE_CUSTOM_FIELD
} from "../../actions/taskEditor";

export const TASK_EDITOR_TABS = {
    GENERAL: 1,
    CUSTOM_FIELDS: 2,
    NOTIFICATIONS: 3
};

const DEFAULT_STATE = {
    open: false,
    isNewTask: false,
    activeTab: TASK_EDITOR_TABS.GENERAL,
    task: {},
    selectedCustomFieldId: {},
    customFieldsLoading: false,
    customFields: []
};

export const taskEditor = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case OPEN_TASK_EDITOR:
            return openTaskEditor(state, action.isNewTask, action.task);
        case CLOSE_TASK_EDITOR:
            return closeTaskEditor(state);
        case UPDATE_EDITOR_TASK:
            return updateEditorTask(state, action.diff);
        case OPEN_TASK_EDITOR_TAB:
            return openTaskEditorTab(state, action.tab);
        case SELECT_CUSTOM_FIELD:
            return selectTaskCustomField(state, action.fieldId);
        case DELETE_CUSTOM_FIELD:
            return deleteTaskCustomField(state, action.id);
        case SET_CUSTOM_FIELDS_LOADING_ANIMATION_VISIBILITY:
            return setCustomFieldsLoadingAnimationVisibility(state, action.visible);
        case SET_CUSTOM_FIELDS:
            return setCustomFields(state, action.fields);
        default:
            return state;
    }
};

function openTaskEditor(state, isNewTask, task) {
    return {
        ...state,
        open: true,
        isNewTask,
        activeTab: TASK_EDITOR_TABS.GENERAL,
        task,
    };
}

function closeTaskEditor(state) {
    return DEFAULT_STATE;
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

function selectTaskCustomField(state, fieldId) {
    return {
        ...state,
        selectedCustomFieldId: fieldId
    };
}

function deleteTaskCustomField(state, id) {
    return {
        ...state,
        customFields: state.customFields.filter((field) => field.id !== id)
    };
}

function setCustomFieldsLoadingAnimationVisibility(state, visible) {
    return {
        ...state,
        customFieldsLoading: visible
    };
}

function setCustomFields(state, fields) {
    return {
        ...state,
        customFields: fields
    };
}