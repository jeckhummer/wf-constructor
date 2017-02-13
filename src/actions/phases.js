import {getPhasesDictionary, getSortedPhases, getPhases} from "../selectors/phases";
import * as _ from "lodash";

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
            const prevPhase = getSortedPhases(state)
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

export const ADD_PHASE = 'ADD_PHASE';
export function addPhase(name, onAdditionComplete) {
    return (dispatch, getState) => {
        const state = getState();
        const phases = getPhases(state);
        const id = phases.length + 1 + '';
        const maxOrder = _.max(phases.map(phase => phase.order)) || 0;

        dispatch({type: ADD_PHASE, name, id, order: maxOrder + 1});
        onAdditionComplete(id);
        // еще надо получить id с сервера и переписать временный id
    };
}