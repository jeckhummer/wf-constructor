import {createSelector} from "reselect";
import * as _ from "lodash";

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
            name: task.name,
            approvalFlow: task.approvalFlow,
            notificationMap: task.notificationMap,
            statusId: task.statusId
        })
    )
);

export const getTasksTeamAndPhaseDictionary = createSelector(
    getTasks,
    tasks => {
        return _.mapValues(
            _.groupBy(tasks, 'teamId'),
            teamTasks => _.groupBy(teamTasks, 'phaseId')
        );
    }
);