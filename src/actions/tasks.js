import {getTasksRelationalDataDictionary} from '../selectors/tasks';

function setTaskParent(id, parentId) {
    return updateTask(id, { parentId });
}

export const DELETE_TASK = 'DELETE_TASK';
function _deleteTask(id) {
    return (dispatch) => {
        dispatch({type: DELETE_TASK, id});
    };
}

export function deleteTask(id) {
    return (dispatch, getState) => {
        const state = getState();
        const task = getTasksRelationalDataDictionary(state)[id];

        if (!task.isLeaf) {
            const parentId = task.isRoot ? null : task.parentId;
            dispatch(setTaskParent(task.childId, parentId));
        }

        dispatch(_deleteTask(id));
    };
}

export function moveTaskLeft(id) {
    return (dispatch, getState) => {
        const state = getState();
        const dictionary = getTasksRelationalDataDictionary(state);
        const task = dictionary[id];

        if (!task.isRoot) {
            const parentId = task.parentId;

            dispatch(setTaskParent(id, dictionary[parentId].parentId));
            dispatch(setTaskParent(parentId, id));

            if (!task.isLeaf) {
                dispatch(setTaskParent(task.childId, parentId));
            }
        }
    };
}

export function moveTaskRight(id) {
    return (dispatch, getState) => {
        const state = getState();
        const task = getTasksRelationalDataDictionary(state)[id];

        if (!task.isLeaf) {
            dispatch(moveTaskLeft(task.childId));
        }
    };
}

export const UPDATE_TASK = 'UPDATE_TASK';
export function updateTask(id, diff) {
    return (dispatch, getState) => {
        dispatch({type: UPDATE_TASK, id, diff});

        if (diff.phaseId !== undefined || diff.teamId !== undefined) {
            const state = getState();
            const dictionary = getTasksRelationalDataDictionary(state);
            let task = dictionary[id];

            while (task.childId !== undefined) {
                if(diff.phaseId !== undefined){
                    dispatch({ type: UPDATE_TASK, id: task.childId, diff: {phaseId: diff.phaseId}})
                }
                if(diff.teamId !== undefined){
                    dispatch({ type: UPDATE_TASK, id: task.childId, diff: {teamId: diff.teamId}});
                }

                task = dictionary[task.childId];
            }
        }
    };
}