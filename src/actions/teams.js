import {getTeamsDictionary, getTeams} from "../selectors/teams";
import * as _ from "lodash";

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

export const ADD_TEAM = 'ADD_TEAM';
export function addTeam(name, onAdditionComplete) {
    return (dispatch, getState) => {
        const state = getState();
        const teams = getTeams(state);
        const id = teams.length + 1 + '';
        const maxOrder = _.max(teams.map(team => team.order)) || 0;

        dispatch({type: ADD_TEAM, name, id, order: maxOrder + 1});
        onAdditionComplete(id);
        // еще надо получить id с сервера и переписать временный id
    };
}