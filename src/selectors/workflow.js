import {createSelector} from 'reselect';
import * as _ from 'lodash';
import {TASK_BLOCK, TASK_GRAPH} from '../styles';
import {getTasksRelationalDataDictionary, getTasksTeamAndPhaseDictionary} from "./tasks";
import {getSortedPhasesIds} from "./phases";
import {getSortedTeamsIds} from "./teams";

export const getTasksTeamAndPhaseMatrix = createSelector(
    getSortedPhasesIds,
    getSortedTeamsIds,
    getTasksTeamAndPhaseDictionary,
    (
        sortedPhasesIds,
        sortedTeamsIds,
        tasksTeamAndPhaseDictionary
    ) => {
        return sortedTeamsIds.map(teamId =>
            sortedPhasesIds.map(phaseId =>
                ((tasksTeamAndPhaseDictionary[teamId] || [])[phaseId] || [])
                    .map(task => task.id)
            )
        );
    }
);

const getChildTasksSequence = (taskIds, taskDictionary, parentId) => {
    const childId = taskIds.find(taskId => taskDictionary[taskId].parentId === parentId);
    return childId == null
        ? []
        : [childId].concat(getChildTasksSequence(taskIds, taskDictionary, childId));
};

export const getWorkflow = createSelector(
    getTasksTeamAndPhaseMatrix,
    getTasksRelationalDataDictionary,
    (tasksTeamAndPhaseMatrix, taskDictionary) => tasksTeamAndPhaseMatrix
        .map(row =>
            row.map(taskIds => taskIds
                .filter(taskId => taskDictionary[taskId].isRoot)
                .map(rootTaskId =>
                    [rootTaskId].concat(getChildTasksSequence(taskIds, taskDictionary, rootTaskId))
                )
            )
        )
);

export const getWorkflowSizes = createSelector(
    getWorkflow,
    workflow => workflow
        .map(row =>
            row.map(sequences => ({
                width: _.max(sequences.map(sequence => sequence.length)) || 0,
                height: sequences.length
            })).map(sizes => ({
                height: TASK_BLOCK.HEIGHT * (sizes.height + 1) + sizes.height * TASK_GRAPH.PADDING,
                width: TASK_BLOCK.WIDTH + (TASK_BLOCK.WIDTH + TASK_GRAPH.ARROW_BLOCK_WIDTH) * sizes.width
            })).map(sizes => ({
                height: sizes.height + TASK_GRAPH.PADDING * 2,
                width: sizes.width + TASK_GRAPH.PADDING * 2
            }))
        )
);

export const getPhaseRulerItems = createSelector(
    getWorkflowSizes,
    getSortedPhasesIds,
    (workflowSizes, sortedPhasesIds) => _.range(0, workflowSizes[0].length)
        .map(index => ({
            size: _.max(workflowSizes.map(row => row[index].width)),
            id: sortedPhasesIds[index],
        }))
);

export const getTeamRulerItems = createSelector(
    getWorkflowSizes,
    getSortedTeamsIds,
    (workflowSizes, sortedTeamsIds) => workflowSizes
        .map((row, index) => ({
            size: _.max(row.map(sizes => sizes.height)),
            id: sortedTeamsIds[index],
        }))
);