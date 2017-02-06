import {CHANGE_TEAM_ORDER} from "../../actions/teams";

export const teams = (state = [], action) => {
    switch (action.type) {
        case CHANGE_TEAM_ORDER:
            return changeTeamOrder(state, action.id, action.order);
        default:
            return state;
    }
};

function changeTeamOrder (state, id, order) {
    return state.map(
        team => ({
            ...team,
            order: team.id === id ? order : team.order
        })
    );
}