import {connect} from 'react-redux';
import {TaskEditorControls} from "../dumb/TaskEditorControls";
import {getTaskEditorState} from "../selectors/ui";
import {updateEditedTask} from "../actions/taskEditor";
import {getSortedTeams} from "../selectors/teams";
import {getTasksRelationalDataDictionary} from "../selectors/tasks";
import {getSortedPhases} from "../selectors/phases";
import {getTasksTeamAndPhaseDictionary} from "../selectors/tasks";

const mapStateToProps = (state) => {
    const editorState = getTaskEditorState(state);
    const task = editorState.editedTask;
    const dictionary = getTasksRelationalDataDictionary(state);

    return {
        name: task.name,
        parentId: task.parentId,
        parentOptions: [{ text: '-- no parent task --', value: '0' }].concat(
            ((getTasksTeamAndPhaseDictionary(state)[task.teamId] || [])[task.phaseId] || [])
                .filter(x => x.id !== task.id)
                .filter(x => dictionary[x.id].isLeaf || x.id === task.parentId)
                .map(x => ({ text: x.name, value: x.id }))
        ),
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