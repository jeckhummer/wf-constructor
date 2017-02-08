import {connect} from 'react-redux';
import {TaskDataControls} from "../dumb/TaskDataControls";
import {getTaskEditorState} from "../selectors/ui";
import {updateEditorTask} from "../actions/ui";
import {getSortedTeams} from "../selectors/teams";
import {getTasksRelationalDataDictionary} from "../selectors/tasks";
import {getSortedPhases} from "../selectors/phases";
import * as _ from "lodash";
import {getTasksTeamAndPhaseDictionary} from "../selectors/workflow";

function getChildTaskIds(parentId, dictionary) {
    const childId = dictionary[parentId].childId;
    return [parentId].concat(
        childId === undefined ? [] : getChildTaskIds(childId, dictionary)
    );
}

const mapStateToProps = (state) => {
    const editorState = getTaskEditorState(state);
    const isNewTask = editorState.isNewTask;
    const task = editorState.task;
    let possibleParents;

    const allTasksInBlock = getTasksTeamAndPhaseDictionary(state)[task.teamId][task.phaseId];

    if (isNewTask) {
        possibleParents = allTasksInBlock;
    } else {
        const dictionary = getTasksRelationalDataDictionary(state);
        const children = getChildTaskIds(task.id, dictionary);
        possibleParents = allTasksInBlock
            .filter(x => !_.includes(children.concat([task.id]), x.id));
    }

    const parentOptions = [{text: '-- no parent task --', value: '0'}].concat(
        possibleParents.map(x => ({text: x.name, value: x.id}))
    );

    return {
        name: task.name,
        parentId: task.parentId,
        teamId: task.teamId,
        parentOptions,
        teamOptions: getSortedTeams(state)
            .map(x => ({text: x.name, value: x.id})),
        phaseId: task.phaseId,
        phaseOptions: getSortedPhases(state)
            .map(x => ({text: x.name, value: x.id})),
        approvalFlow: task.approvalFlow
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskChange: diff => dispatch(updateEditorTask(diff))
    };
};

export const TaskEditorDataControls = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskDataControls);