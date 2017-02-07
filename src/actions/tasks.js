import {getTasksRelationalDataDictionary} from '../selectors/tasks';

function setTaskParent(id, parentId) {
    return updateTask(id, {parentId});
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
    return (dispatch) => {
        dispatch({type: UPDATE_TASK, id, diff});
    }
}

export function saveEditedTask(id, diff) {
    return (dispatch, getState) => {
        const state = getState();
        const dictionary = getTasksRelationalDataDictionary(state);
        const task = dictionary[id];

        dispatch(updateTask(id, diff));

        const phaseChange = diff.phaseId !== undefined && diff.phaseId !== task.phaseId;
        const teamChange = diff.teamId !== undefined && diff.teamId !== task.teamId;
        const parentChange = diff.parentId !== undefined && diff.parentId !== task.parentId;

        if (phaseChange || teamChange || parentChange) {
            let temp = task;

            // если таск перемещается в другую фазу или навешивается на другую команду,
            // все дочерние таски тоже "перемещаются" вслед за ним.
            while (!temp.isLeaf) {
                if (phaseChange) {
                    dispatch(updateTask(temp.childId, {phaseId: diff.phaseId}));
                }
                if (teamChange) {
                    dispatch(updateTask(temp.childId, {teamId: diff.teamId}));
                }

                temp = dictionary[temp.childId];
            }

            const tasksLastChild = temp;

            // если таск привязали к другому родителю,
            // вся започка (сам таск + все его дочерние таски) должна вклиниться между
            // новым родительским таском и его прежним непосредственным дочерним таском
            //
            // A--B---C--D
            //      ↑       =>  A--B--[E--F--G--H]--C--D
            // E--F--G--H
            if (parentChange) {
                const newParent = dictionary[diff.parentId];

                if (newParent && !newParent.isLeaf) {
                    dispatch(updateTask(newParent.childId, {parentId: tasksLastChild.id}));
                }
            }
        }
    };
}