import {CHANGE_PHASE_ORDER, ADD_PHASE} from "../../actions/phases";

export const phases = (state = [], action) => {
    switch (action.type) {
        case CHANGE_PHASE_ORDER:
            return changePhaseOrder(state, action.id, action.order);
        case ADD_PHASE:
            return addPhase(state, action.id, action.name, action.order);
        default:
            return state;
    }
};

function changePhaseOrder (state, id, order) {
    return state.map(
        phase => ({
            ...phase,
            order: phase.id === id ? order : phase.order
        })
    );
}

function addPhase(state, id, name, order) {
    return state.concat([{
        id,
        name,
        order
    }]);
}