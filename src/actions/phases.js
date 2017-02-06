import {getPhasesDictionary, getPhases} from "../selectors/phases";

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