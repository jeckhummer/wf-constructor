import * as _ from "lodash";
import {createSelector} from "reselect";
import {getTasks} from "./tasks";

const getRowTeams = state => state.entities.teams;

export const getTeams = createSelector(
    [getTasks, getRowTeams],
    (tasks, teams) => {
        const orders = teams.map(team => team.order);
        const maxOrder = _.max(orders);
        const minOrder = _.min(orders);

        return teams.map(
            team => ({
                ...team,
                hasTasks: tasks.some(task => task.teamId === team.id),
                first: team.order === minOrder,
                last: team.order === maxOrder
            })
        );
    }
);

export const getWorkflowTeams = createSelector(
    [getTeams],
    teams => _.sortBy(teams.filter(team => team.hasTasks), 'order')
);

export const getWorkflowTeamIds = createSelector(
    [getWorkflowTeams],
    teams => teams.map(team => team.id)
);

export const getAllTeams = createSelector(
    [getTeams],
    teams => _.sortBy(teams, 'name')
);

export const getAllTeamIds = createSelector(
    [getAllTeams],
    teams => teams.map(team => team.id)
);

export const getTeamsDictionary = createSelector(
    [getTeams],
    teams => _.keyBy(teams, 'id')
);