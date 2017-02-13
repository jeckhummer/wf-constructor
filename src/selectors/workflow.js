import {createSelector} from 'reselect';
import * as _ from 'lodash';
import {TASK_BLOCK, WORKFLOW_GRID} from '../styles';
import {getTasksRelationalDataDictionary, getTasks} from "./tasks";
import {getSortedPhasesIds} from "./phases";
import {getWorkflowTeamIds} from "./teams";
import {getEditMode} from "./ui";

const getChildTasksSequence = (taskIds, taskDictionary, parentId) => {
    const childId = taskIds.find(taskId => taskDictionary[taskId].parentId === parentId);
    const childSequence = childId == null
        ? []
        : [childId].concat(getChildTasksSequence(taskIds, taskDictionary, childId));

    return childSequence;
};

export const getWorkflowMatrix = createSelector(
    [getSortedPhasesIds, getWorkflowTeamIds, getTasks, getTasksRelationalDataDictionary],
    (phasesIds, teamsIds, tasks, dictionary) => {
        const map = teamsIds.map(teamId =>
            phasesIds.map(phaseId => {
                const nearbyTaskIds = tasks
                    .filter(task => task.teamId === teamId && task.phaseId === phaseId)
                    .map(task => task.id);

                const nearbyRootTaskIds = nearbyTaskIds.filter(taskId => dictionary[taskId].isRoot);

                return nearbyRootTaskIds.map(rootTaskId =>
                    [rootTaskId].concat(getChildTasksSequence(nearbyTaskIds, dictionary, rootTaskId))
                );
            })
        );

        return map;
    }
);

export const getWorkflowSizes = createSelector(
    [getWorkflowMatrix, getEditMode],
    (workflow, editMode) => {
        return workflow.map(row =>
            row.map(sequences => ({
                width: _.max(sequences.map(sequence => sequence.length)) || 0,
                height: sequences.length
            })).map(sizes => ({
                height: TASK_BLOCK.HEIGHT * (sizes.height + editMode) + WORKFLOW_GRID.PADDING * (sizes.height - 1 + editMode),
                width: TASK_BLOCK.WIDTH * (sizes.width + editMode) + WORKFLOW_GRID.ARROW_BLOCK_WIDTH * (sizes.width - 1 + editMode)
            })).map(sizes => ({
                height: sizes.height + WORKFLOW_GRID.PADDING * 2,
                width: sizes.width + WORKFLOW_GRID.PADDING * 2
            }))
        )
    }
);

export const getPhaseRulerItems = createSelector(
    [getWorkflowSizes, getSortedPhasesIds],
    (sizes, phaseIds) => {
        return _.range(0, phaseIds.length)
            .map(index => ({
                size: _.max(sizes.map(row => row[index].width))
                    || (TASK_BLOCK.WIDTH + WORKFLOW_GRID.PADDING * 2),
                id: phaseIds[index],
            }));
    }
);

export const getTeamRulerItems = createSelector(
    [getWorkflowSizes, getWorkflowTeamIds],
    (sizes, teamIds) => {
        return sizes
            .map((row, index) => ({
                size: _.max(row.map(sizes => sizes.height)),
                id: teamIds[index],
            }));
    }
);