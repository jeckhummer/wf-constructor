import {connect} from 'react-redux';
import {TaskEditorControls} from "../dumb/TaskEditorControls";
import {getTaskEditorState} from "../selectors/ui";
import {updateEditedTask} from "../actions/taskEditor";
import {getSortedTeams} from "../selectors/teams";
import {getTasksRelationalDataDictionary} from "../selectors/tasks";
import {getSortedPhases} from "../selectors/phases";
import {getTasksTeamAndPhaseDictionary} from "../selectors/tasks";
import * as _ from "lodash";

function getChildTaskIds(parentId, dictionary) {
    const childId = dictionary[parentId].childId;
    return [parentId].concat(
        childId === undefined ? [] : getChildTaskIds(childId, dictionary)
    );
}

const mapStateToProps = (state) => {
    const editorState = getTaskEditorState(state);
    const task = editorState.editedTask;
    const dictionary = getTasksRelationalDataDictionary(state);

    const children = getChildTaskIds(task.id, dictionary);
    const possibleParents = getTasksTeamAndPhaseDictionary(state)[task.teamId][task.phaseId]
        .filter(x => !_.includes(children.concat([task.id]), x.id))
        .map(x => ({ text: x.name, value: x.id }));

    return {
        name: task.name,
        parentId: task.parentId,
        parentOptions: [{ text: '-- no parent task --', value: '0' }].concat(possibleParents),
        teamId: task.teamId,
        teamOptions: getSortedTeams(state)
            .map(x => ({ text: x.name, value: x.id })),
        phaseId: task.phaseId,
        phaseOptions: getSortedPhases(state)
            .map(x => ({ text: x.name, value: x.id })),
        approvalFlow: task.approvalFlow
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTaskChange: diff => dispatch(updateEditedTask(diff))
    };
};

export const SelectedTaskEditorControls = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskEditorControls);