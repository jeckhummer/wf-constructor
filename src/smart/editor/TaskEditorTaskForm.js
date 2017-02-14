import {connect} from 'react-redux';
import {TaskForm} from "../../dumb/editor/TaskForm";
import {getTaskEditorState, getTaskEditorActiveTask} from "../../selectors/ui";
import {updateEditorTask} from "../../actions/ui";
import {getTeamsDictionary, getAllTeams} from "../../selectors/teams";
import {getTasksRelationalDataDictionary, getTasks} from "../../selectors/tasks";
import {getSortedPhases, getPhasesDictionary} from "../../selectors/phases";
import * as _ from "lodash";
import {addPhase} from "../../actions/phases";
import {addTeam} from "../../actions/teams";

function getChildTaskIds(parentId, dictionary) {
    const childId = dictionary[parentId].childId;
    return [parentId].concat(
        childId === undefined ? [] : getChildTaskIds(childId, dictionary)
    );
}

const mapStateToProps = (state) => {
    const {isNewTask} = getTaskEditorState(state);
    const task = getTaskEditorActiveTask(state);
    const noTasks = getTasks(state).length === 0;
    const phasesDictionary = getPhasesDictionary(state);
    const teamsDictionary = getTeamsDictionary(state);

    let possibleParents;

    if (noTasks) {
        possibleParents = [];
    } else {
        const tasks = getTasks(state);
        const allTasksInBlock = tasks.filter(t => t.teamId === task.teamId && t.phaseId === task.phaseId);

        if (isNewTask) {
            possibleParents = allTasksInBlock;
        } else {
            const relationalDictionary = getTasksRelationalDataDictionary(state);
            const children = getChildTaskIds(task.id, relationalDictionary);
            possibleParents = allTasksInBlock
                .filter(x => !_.includes(children.concat([task.id]), x.id));
        }
    }

    const parentOptions = [{text: '[NO PARENT TASK]', value: '0'}].concat(
        possibleParents.map(x => ({text: x.name, value: x.id}))
    );

    return {
        phasesDictionary,
        teamsDictionary,
        name: task.name,
        parentId: task.parentId,
        teamId: task.teamId,
        parentOptions,
        teamOptions: getAllTeams(state)
            .map(x => ({text: x.name, value: x.id})),
        phaseId: task.phaseId,
        phaseOptions: getSortedPhases(state)
            .map(x => ({text: x.name, value: x.id})),
        approvalFlow: task.approvalFlow
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPhase: phase => dispatch(
            addPhase(
                phase,
                phaseId => dispatch(updateEditorTask({phaseId}))
            )),
        addTeam: team => dispatch(
            addTeam(
                team,
                teamId => dispatch(updateEditorTask({teamId}))
            )
        ),
        changeTask: diff => dispatch(updateEditorTask(diff)),
    };
};

const mergeProps = (stateProps, dispatchProps) => {
    return {
        ...stateProps,
        ...dispatchProps,
        onAddPhase: phase => {
            // Dropdown почему-то заново вызывает onAddItem после выбора нового элемента.
            // При этом он в качестве value использует value, а не text, как ожидалось...
            if (stateProps.phasesDictionary[phase] === undefined) {
                dispatchProps.addPhase(phase);
            }
        },
        onAddTeam: team => {
            // Dropdown почему-то заново вызывает onAddItem после выбора нового элемента.
            // При этом он в качестве value использует value, а не text, как ожидалось...
            if (stateProps.teamsDictionary[team] === undefined) {
                dispatchProps.addTeam(team);
            }
        },
        onPhaseChange: phaseId => {
            // Dropdown после onAddItem вызывает onChange и в качестве value использует text, а не value...
            // Поэтому и такой костыль:
            if (stateProps.phasesDictionary[phaseId] !== undefined) {
                dispatchProps.changeTask({phaseId});
            }
        },
        onTeamChange: teamId => {
            // Dropdown после onAddItem вызывает onChange и в качестве value использует text, а не value...
            // Поэтому и такой костыль:
            if (stateProps.teamsDictionary[teamId] !== undefined) {
                dispatchProps.changeTask({teamId});
            }
        },
        onParentChange: parentId => dispatchProps.changeTask({parentId}),
        onNameChange: name => dispatchProps.changeTask({name}),
        onApprovalFlowChange: approvalFlow => dispatchProps.changeTask({approvalFlow}),
    };
};

export const TaskEditorTaskForm = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(TaskForm);