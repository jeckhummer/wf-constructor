import {createSelector} from "reselect";
import * as _ from "lodash";
import {getStatuses} from "./statuses";

export const getTasks = (state) => state.entities.tasks;

const getTasksDictionary = createSelector(
    [getTasks],
    tasks => _.keyBy(tasks, 'id')
);

export const getTasksRelationalDataDictionary = createSelector(
    [getTasks, getTasksDictionary],
    (tasks, dictionary) => {
        return _.mapValues(
            dictionary,
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
    }
);

export const getTasksInfoDataDictionary = createSelector(
    [getTasksDictionary, getStatuses],
    (dictionary, statuses) => _.mapValues(
        dictionary,
        task => ({
            id: task.id,
            name: task.name,
            approvalFlow: task.approvalFlow,
            notificationMapNumber: task.notificationMapNumber,
            statusId: task.statusId
        })
    )
);