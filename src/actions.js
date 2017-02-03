import {
    getTeams,
    getTeamsDictionary,
    getPhases,
    getPhasesDictionary,
    getTasksDictionary
} from './selectors';

// PHASES

export const CHANGE_PHASE_ORDER = 'CHANGE_PHASE_ORDER';
function changePhaseOrder(id, order) {
    return (dispatch) => {
        dispatch({type: CHANGE_PHASE_ORDER, id, order});
    };
}

function movePhase(id, movementValidityPredicate, directionDiff) {
    return (dispatch, getState) => {
        const state = getState();
        const phase = getPhasesDictionary(state)[id];

        if (movementValidityPredicate(phase)) {
            const newOrder = phase.order + directionDiff;
            const prevPhase = getPhases(state)
                .find(phase => phase.order === newOrder);

            dispatch(changePhaseOrder(phase.id, newOrder));
            dispatch(changePhaseOrder(prevPhase.id, phase.order));
        }
    };
}

export function movePhaseLeft(id) {
    return movePhase(id, x => !x.first, -1);
}

export function movePhaseRight(id) {
    return movePhase(id, x => !x.last, 1);
}

// TEAMS

export const CHANGE_TEAM_ORDER = 'CHANGE_TEAM_ORDER';
function changeTeamOrder(id, order) {
    return (dispatch) => {
        dispatch({type: CHANGE_TEAM_ORDER, id, order});
    };
}

function moveTeam(id, movementValidityPredicate, directionDiff) {
    return (dispatch, getState) => {
        const state = getState();
        const team = getTeamsDictionary(state)[id];

        if (movementValidityPredicate(team)) {
            const newOrder = team.order + directionDiff;
            const prevTeam = getTeams(state)
                .find(team => team.order === newOrder);

            dispatch(changeTeamOrder(team.id, newOrder));
            dispatch(changeTeamOrder(prevTeam.id, team.order));
        }
    };
}

export function moveTeamUp(id) {
    return moveTeam(id, x => !x.first, -1);
}

export function moveTeamDown(id) {
    return moveTeam(id, x => !x.last, 1);
}

// TASKS

export const SET_TASK_PARENT = 'SET_TASK_PARENT';
function setTaskParent(id, parentId) {
    return (dispatch) => {
        dispatch({type: SET_TASK_PARENT, id, parentId});
    };
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
        const task = getTasksDictionary(state)[id];

        if (!task.isLeaf) {
            const parentId = task.isRoot ? null : task.parent.id;
            dispatch(setTaskParent(task.child.id, parentId));
        }

        dispatch(_deleteTask(id));
    };
}

export function moveTaskLeft(id) {
    return (dispatch, getState) => {
        const state = getState();
        const task = getTasksDictionary(state)[id];

        if (!task.isRoot) {
            const parentId = task.parent.id;

            dispatch(setTaskParent(task.id, task.parent.parentId));
            dispatch(setTaskParent(parentId, task.id));

            if (!task.isLeaf) {
                dispatch(setTaskParent(task.child.id, parentId));
            }
        }
    };
}

export function moveTaskRight(id) {
    return (dispatch, getState) => {
        const state = getState();
        const task = getTasksDictionary(state)[id];

        if (!task.isLeaf) {
            dispatch(moveTaskLeft(task.child.id));
        }
    };
}