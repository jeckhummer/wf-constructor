import {createSelector} from 'reselect';
import * as _ from 'lodash';
import {reverseMapFromMap} from "./utils/reverseMapFromMap";
import {TASK_BLOCK, TASK_SCENARIO} from './styles';

// export const getStatuses = (state) => state.entities.statuses;
export const getTasks = (state) => {
    let tasks = state.entities.tasks;

    return tasks.map(
        task => {
            const parent = tasks.find(t => t.id === task.parentId);
            const child = tasks.find(t => t.parentId === task.id);

            return {
                ...task,
                parent,
                child,
                isRoot: parent === undefined,
                isLeaf: child === undefined
            }
        }
    );
};
export const getPhases = (state) => {
    const orders = state.entities.phases.map(phase => phase.order);
    const maxOrder = _.max(orders);
    const minOrder = _.min(orders);

    return state.entities.phases.map(
        phase => ({
            ...phase,
            first: phase.order === minOrder,
            last: phase.order === maxOrder
        })
    );
};
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

export const getSortedPhases = createSelector(
    getPhases,
    phases => _.sortBy(phases, 'order')
);
export const getPhasesDictionary = createSelector(
    getPhases,
    phases => _.keyBy(phases, 'id')
);

export const getSortedTeams = createSelector(
    getTeams,
    teams => _.sortBy(teams, 'order')
);
export const getTeamsDictionary = createSelector(
    getTeams,
    teams => _.keyBy(teams, 'id')
);

export const getTasksDictionary = createSelector(
    getTasks,
    tasks => _.keyBy(tasks, 'id')
);
export const getTaskPhasesDictionary = createSelector(
    getTasks,
    tasks => _.mapValues(_.keyBy(tasks, 'id'), 'phaseId')
);
export const getTaskTeamsDictionary = createSelector(
    getTasks,
    tasks => _.mapValues(_.keyBy(tasks, 'id'), 'teamId')
);

export const getTasksTeamAndPhaseDistribution = createSelector(
    getTaskPhasesDictionary,
    getTaskTeamsDictionary,
    getTasksDictionary,
    getSortedPhases,
    getSortedTeams,
    (
        taskPhasesDictionary,
        taskTeamsDictionary,
        tasksDictionary,
        sortedPhases,
        sortedTeams
    ) => {
        const tasksByPhases = reverseMapFromMap(taskPhasesDictionary);
        const tasksByTeams = reverseMapFromMap(taskTeamsDictionary);

        return sortedTeams.map(team =>
            sortedPhases.map(phase =>
                _.intersectionBy(
                    tasksByTeams[team.id] || [],
                    tasksByPhases[phase.id] || []
                )
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
    getTasksTeamAndPhaseDistribution,
    getTasksDictionary,
    (tasksTeamAndPhaseDistribution, taskDictionary) => tasksTeamAndPhaseDistribution
        .map(row =>
            row.map(taskIds => taskIds
                .filter(taskId => taskDictionary[taskId].parentId == null)
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
                height: TASK_BLOCK.HEIGHT * (sizes.height + 1) + sizes.height * TASK_SCENARIO.PADDING,
                width: TASK_BLOCK.WIDTH + (TASK_BLOCK.WIDTH + TASK_SCENARIO.ARROW_BLOCK_WIDTH) * sizes.width
            })).map(sizes => ({
                height: sizes.height + TASK_SCENARIO.PADDING * 2,
                width: sizes.width + TASK_SCENARIO.PADDING * 2
            }))
        )
);

export const getPhaseRulerItems = createSelector(
    getWorkflowSizes,
    getSortedPhases,
    (workflowSizes, sortedPhases) => _.range(0, workflowSizes[0].length)
        .map(index => ({
            size: _.max(workflowSizes.map(row => row[index].width)),
            id: sortedPhases[index].id,
        }))
);

export const getTeamRulerItems = createSelector(
    getWorkflowSizes,
    getSortedTeams,
    (workflowSizes, sortedTeams) => workflowSizes
        .map((row, index) => ({
            size: _.max(row.map(sizes => sizes.height)),
            id: sortedTeams[index].id,
        }))
);