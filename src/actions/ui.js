import {getTasksRelationalDataDictionary, getTasksInfoDataDictionary} from '../selectors/tasks';

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
                name: taskInfo.name,
                parentId: taskRelations.parentId,
                teamId: taskRelations.teamId,
                phaseId: taskRelations.phaseId,
                approvalFlow: taskInfo.approvalFlow,
            }
        });
    };
}

export function openTaskEditorForAdding(task) {
    return (dispatch) => {
        dispatch({
            type: OPEN_TASK_EDITOR,
            isNewTask: true,
            task
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
export function updateEditorTask(diff) {
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
    return (dispatch) => {
        dispatch({type: OPEN_TASK_EDITOR_TAB, tab});
    };
}

export const TOGGLE_EDIT_MODE = 'TOGGLE_EDIT_MODE';
export function toggleEditMode() {
    return (dispatch) => {
        dispatch({ type: TOGGLE_EDIT_MODE });
    };
}