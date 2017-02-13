import {CHANGE_TEAM_ORDER, ADD_TEAM} from "../../actions/teams";

export const teams = (state = [], action) => {
    switch (action.type) {
        case CHANGE_TEAM_ORDER:
            return changeTeamOrder(state, action.id, action.order);
        case ADD_TEAM:
            return addTeam(state, action.id, action.name, action.order);
        default:
            return state;
    }
};

function changeTeamOrder(state, id, order) {
    return state.map(
        team => ({
            ...team,
            order: team.id === id ? order : team.order
        })
    );
}

function addTeam(state, id, name, order) {
    return state.concat([{
        id,
        name,
        order
    }]);
}