import {createSelector} from "reselect";
import * as _ from "lodash";
import {getSortedPhases} from "./phases";
import {getSortedTeams} from "./teams";

export const getTasks = (state) => state.entities.tasks;

const getTasksDictionary = createSelector(
    getTasks,
    tasks => _.keyBy(tasks, 'id')
);

export const getTasksRelationalDataDictionary = createSelector(
    getTasks,
    getTasksDictionary,
    (tasks, tasksDictionary) => _.mapValues(
        tasksDictionary,
        task => {
            const child = tasks.find(t => t.parentId === task.id);
            const childId = child && child.id;

            return {
                id: task.id,
                parentId: task.parentId,
                phaseId: task.phaseId,
                teamId: task.teamId,
                childId,
                isRoot: task.parentId === null,
                isLeaf: childId === undefined
            };
        }
    )
);

export const getTasksInfoDataDictionary = createSelector(
    getTasksDictionary,
    tasksDictionary => _.mapValues(
        tasksDictionary,
        task => ({
            id: task.id,
            name: task.name,
            approvalFlow: task.approvalFlow,
            notificationMap: task.notificationMap,
            statusId: task.statusId
        })
    )
);

export const getTasksTeamAndPhaseDictionary = createSelector(
    getTasks,
    getSortedPhases,
    getSortedTeams,
    (
        tasks,
        phases,
        teams
    ) => {
        let dictionary = {};

        teams.forEach(
            team => {
                dictionary[team.id] = {};
                phases.forEach(
                    phase => dictionary[team.id][phase.id] = tasks.filter(
                        task => task.phaseId === phase.id && task.teamId === team.id
                    )
                )
            }
        );

        return dictionary;
    }
);