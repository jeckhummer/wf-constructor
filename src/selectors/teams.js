import * as _ from "lodash";
import {createSelector} from "reselect";
import {getTasks} from "./tasks";

const getRowTeams = state => state.entities.teams;

export const getTeams = createSelector(
    [getTasks, getRowTeams],
    (tasks, rowTeams) => {
        const orders = rowTeams.map(team => team.order);
        const maxOrder = _.max(orders);
        const minOrder = _.min(orders);

        return rowTeams.map(
            team => ({
                ...team,
                hasTasks: tasks.some(task => task.teamId === team.id),
                first: team.order === minOrder,
                last: team.order === maxOrder
            })
        );
    }
);

export const getSortedTeams = createSelector(
    [getTeams],
    teams => _.sortBy(teams.filter(team => team.hasTasks), 'order')
);

export const getSortedTeamsIds = createSelector(
    [getSortedTeams],
    sortedTeams => sortedTeams.map(team => team.id)
);

export const getTeamsDictionary = createSelector(
    [getTeams],
    teams => _.keyBy(teams, 'id')
);