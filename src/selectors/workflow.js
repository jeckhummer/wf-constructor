import {createSelector} from 'reselect';
import * as _ from 'lodash';
import {TASK_BLOCK, TASK_GRAPH} from '../styles';
import {getTasksRelationalDataDictionary, getTasks} from "./tasks";
import {getSortedPhasesIds, getSortedPhases} from "./phases";
import {getSortedTeamsIds, getSortedTeams} from "./teams";
import {getEditMode} from "./ui";

export const getTasksTeamAndPhaseDictionary = createSelector(
    [getTasks, getSortedPhases, getSortedTeams],
    (tasks, phases, teams) => {
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

export const getTasksTeamAndPhaseMatrix = createSelector(
    [getSortedPhasesIds, getSortedTeamsIds, getTasksTeamAndPhaseDictionary],
    (sortedPhasesIds, sortedTeamsIds, tasksTeamAndPhaseDictionary) => {
        return sortedTeamsIds.map(teamId =>
            sortedPhasesIds.map(phaseId =>
                tasksTeamAndPhaseDictionary[teamId][phaseId].map(task => task.id)
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
    [getTasksTeamAndPhaseMatrix, getTasksRelationalDataDictionary],
    (tasksTeamAndPhaseMatrix, taskDictionary) => {
        return tasksTeamAndPhaseMatrix
            .map(row =>
                row.map(taskIds => taskIds
                    .filter(taskId => taskDictionary[taskId].isRoot)
                    .map(rootTaskId =>
                        [rootTaskId].concat(getChildTasksSequence(taskIds, taskDictionary, rootTaskId))
                    )
                )
            );
    }
);

export const getWorkflowSizes = createSelector(
    [getWorkflow, getEditMode],
    (workflow, editMode) => {
        return workflow.map(row =>
            row.map(sequences => ({
                width: _.max(sequences.map(sequence => sequence.length)) || 0,
                height: sequences.length
            })).map(sizes => ({
                height: TASK_BLOCK.HEIGHT * (sizes.height + editMode) + TASK_GRAPH.PADDING * (sizes.height - 1 + editMode),
                width: TASK_BLOCK.WIDTH * (sizes.width + editMode) + TASK_GRAPH.ARROW_BLOCK_WIDTH * (sizes.width - 1 + editMode)
            })).map(sizes => ({
                height: sizes.height + TASK_GRAPH.PADDING * 2,
                width: sizes.width + TASK_GRAPH.PADDING * 2
            }))
        )
    }
);

export const getPhaseRulerItems = createSelector(
    [getWorkflowSizes, getSortedPhasesIds],
    (workflowSizes, sortedPhasesIds) => {
        return _.range(0, sortedPhasesIds.length)
            .map(index => ({
                size: _.max(workflowSizes.map(row => row[index].width)),
                id: sortedPhasesIds[index],
            }));
    }
);

export const getTeamRulerItems = createSelector(
    [getWorkflowSizes, getSortedTeamsIds],
    (workflowSizes, sortedTeamsIds) => {
        return workflowSizes
            .map((row, index) => ({
                size: _.max(row.map(sizes => sizes.height)),
                id: sortedTeamsIds[index],
            }));
    }
);