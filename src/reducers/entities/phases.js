import {CHANGE_PHASE_ORDER} from "../../actions/phases";

export const phases = (state = [], action) => {
    switch (action.type) {
        case CHANGE_PHASE_ORDER:
            return changePhaseOrder(state, action.id, action.order);
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