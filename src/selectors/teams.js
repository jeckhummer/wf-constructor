import * as _ from "lodash";
import {createSelector} from "reselect";

export const getTeams = (state) => {
    const orders = state.entities.teams.map(team => team.order);
    const maxOrder = _.max(orders);
    const minOrder = _.min(orders);

    return state.entities.teams.map(
        team => ({
            ...team,
            first: team.order === minOrder,
            last: team.order === maxOrder
        })
    );
};

export const getSortedTeams = createSelector(
    getTeams,
    teams => _.sortBy(teams, 'order')
);

export const getSortedTeamsIds = createSelector(
    getSortedTeams,
    sortedTeams => sortedTeams.map(team => team.id)
);

export const getTeamsDictionary = createSelector(
    getTeams,
    teams => _.keyBy(teams, 'id')
);