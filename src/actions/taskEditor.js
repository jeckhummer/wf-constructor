import {getTasksRelationalDataDictionary, getTasksInfoDataDictionary} from '../selectors/tasks';
import {DEFAULT_TASK_NAME, DEFAULT_TASK_AF_MODE, DEFAULT_TASK_STATUS_ID} from "../constants";
import {getTaskEditorActiveTask, getTaskEditorState, getCustomFieldEditorState} from "../selectors/ui";
import {addNewTask, updateTask} from './tasks';
import {API} from "../API/CurrentAPI";
import {getTaskCustomFieldsCache} from "../selectors/cache";
import {cacheTaskCustomFields} from "./cache";
import {TASK_EDITOR_TABS} from "../reducers/ui/taskEditor";

export const OPEN_TASK_EDITOR = 'SHOW_TASK_EDITOR';
export function openTaskEditorForEdit(id) {
    return (dispatch, getState) => {
        const state = getState();
        const taskRelations = getTasksRelationalDataDictionary(state)[id];
        const taskInfo = getTasksInfoDataDictionary(state)[id];

        dispatch({
            type: OPEN_TASK_EDITOR,
            isNewTask: false,
            task: {
                id,
                ...taskInfo,
                ...taskRelations,
            }
        });
    };
}

export function openTaskEditorForAdding(task = {}) {
    return (dispatch) => {
        dispatch({
            type: OPEN_TASK_EDITOR,
            isNewTask: true,
            task: {
                name: DEFAULT_TASK_NAME,
                teamId: null,
                phaseId: null,
                parentId: null,
                approvalFlow: DEFAULT_TASK_AF_MODE,
                statusId: DEFAULT_TASK_STATUS_ID,
                ...task
            }
        });
    };
}

export const CLOSE_TASK_EDITOR = 'CLOSE_TASK_EDITOR';
export function closeTaskEditor() {
    return (dispatch) => {
        dispatch({type: CLOSE_TASK_EDITOR});
    };
}

export const UPDATE_EDITOR_TASK = 'UPDATE_EDITOR_TASK';
export function updateTaskEditorTask(diff) {
    return (dispatch) => {
        // если таск перемещается в другую фазу или навешивается на другую команду,
        // ссылка на родительский таск автоматически заnullяется,
        // так как родительский таск и его дочерние таски обязательно должны принадлежать
        // одной фазе и быть у одной команды
        if (diff.parentId === undefined
            && (diff.phaseId !== undefined || diff.teamId !== undefined)) {
            dispatch({type: UPDATE_EDITOR_TASK, diff: {parentId: null}});
        }
        dispatch({type: UPDATE_EDITOR_TASK, diff});
    };
}

export const OPEN_TASK_EDITOR_TAB = 'OPEN_TASK_EDITOR_TAB';
export function openTaskEditorTab(tab) {
    return (dispatch, getState) => {
        const state = getState();

        if (tab === TASK_EDITOR_TABS.CUSTOM_FIELDS) {
            const customFieldsCache = getTaskCustomFieldsCache(state);
            const taskId = getTaskEditorState(state).task.id;
            const cachedCustomFields = customFieldsCache[taskId];

            if (cachedCustomFields !== undefined) {
                dispatch(setCustomFieldsLoadingAnimationVisibility(false));
                dispatch(setCustomFields(cachedCustomFields));
            } else {
                dispatch(setCustomFieldsLoadingAnimationVisibility(true));
                dispatch(setCustomFields([]));

                API.getCustomFields(taskId)
                    .then(fields => {
                        dispatch(cacheTaskCustomFields(taskId, fields));
                        dispatch(setCustomFields(fields));
                        dispatch(setCustomFieldsLoadingAnimationVisibility(false));
                    });
            }
        }

        dispatch({type: OPEN_TASK_EDITOR_TAB, tab});
    };
}

export function saveTaskEditorNewTask() {
    return function (dispatch, getState) {
        const state = getState();
        const editorTask = getTaskEditorActiveTask(state);

        dispatch(addNewTask(editorTask));
    }
}

export function saveTaskEditorTask() {
    return function (dispatch, getState) {
        const state = getState();
        const editorTask = getTaskEditorActiveTask(state);

        dispatch(updateTask(editorTask.id, editorTask));
    }
}

export const SELECT_CUSTOM_FIELD = 'SELECT_CUSTOM_FIELD';
export function selectCustomField(field) {
    return function (dispatch) {
        dispatch({type: SELECT_CUSTOM_FIELD, field});
    }
}

export function clearCustomFieldSelection() {
    return selectCustomField(null);
}

export const DELETE_CUSTOM_FIELD = 'DELETE_CUSTOM_FIELD';
export function deleteCustomField(id) {
    return function (dispatch) {
        dispatch(clearCustomFieldSelection());
        dispatch({type: DELETE_CUSTOM_FIELD, id});
    }
}

export const SET_CUSTOM_FIELDS_LOADING_ANIMATION_VISIBILITY = 'SET_CUSTOM_FIELDS_LOADING_ANIMATION_VISIBILITY';
export function setCustomFieldsLoadingAnimationVisibility(visible) {
    return (dispatch) => {
        dispatch({type: SET_CUSTOM_FIELDS_LOADING_ANIMATION_VISIBILITY, visible});
    };
}

export const SET_CUSTOM_FIELDS = 'SET_CUSTOM_FIELDS';
export function setCustomFields(fields) {
    return (dispatch) => {
        dispatch({type: SET_CUSTOM_FIELDS, fields});
    };
}

export function updateCustomField(id, customField) {
    return (dispatch, getState) => {
        const state = getState();
        const {customFields} = getTaskEditorState(state);

        dispatch(setCustomFields(
            customFields.map(field =>
                field.id === id
                    ? {...customField, id}
                    : field
            )
        ));
    };
}

export function saveEditedCustomField() {
    return (dispatch, getState) => {
        const state = getState();
        const {customField} = getCustomFieldEditorState(state);

        dispatch(updateCustomField(
            customField.id,
            customField
        ));
    };
}