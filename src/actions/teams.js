import {getTeamsDictionary, getTeams} from "../selectors/teams";

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