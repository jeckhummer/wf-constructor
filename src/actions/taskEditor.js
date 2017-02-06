import {getTasksRelationalDataDictionary, getTasksInfoDataDictionary} from '../selectors/tasks';

export const OPEN_TASK_EDITOR = 'SHOW_TASK_EDITOR';
export function openTaskEditor(id) {
    return (dispatch, getState) => {
        const state = getState();
        const taskRelations = getTasksRelationalDataDictionary(state)[id];
        const taskInfo = getTasksInfoDataDictionary(state)[id];

        dispatch({
            type: OPEN_TASK_EDITOR,
            editedTask: {
                id,
                name: taskInfo.name,
                parentId: taskRelations.parentId,
                teamId: taskRelations.teamId,
                phaseId: taskRelations.phaseId,
                approvalFlow: taskInfo.approvalFlow,
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

export const UPDATE_EDITED_TASK = 'UPDATE_EDITED_TASK';
export function updateEditedTask(diff) {
    return (dispatch) => {
        if (diff.parentId === undefined
            && (diff.phaseId !== undefined || diff.teamId !== undefined)) {
            dispatch({type: UPDATE_EDITED_TASK, diff: {parentId: null}});
        }
        dispatch({type: UPDATE_EDITED_TASK, diff});
    };
}

export const OPEN_TASK_EDITOR_TAB = 'OPEN_TASK_EDITOR_TAB';
export function openTaskEditorTab(tab) {
    return (dispatch) => {
        dispatch({type: OPEN_TASK_EDITOR_TAB, tab});
    };
}