import {connect} from 'react-redux';
import {SaveButton} from "../dumb/buttons/SaveButton";
import {saveEditedTask} from "../actions/tasks";
import {getTaskEditorState} from "../selectors/ui";
import {closeTaskEditor} from "../actions/taskEditor";

const mapStateToProps = (state) => {
    const editorState = getTaskEditorState(state);
    const task = editorState.editedTask;

    return {
        content: "SAVE",
        taskData: task
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: task => {
            dispatch(saveEditedTask(task.id, task));
            dispatch(closeTaskEditor());
        }
    };
};

const mergeProps = (stateProps, dispatchProps) => {
    return {
        content: stateProps.content,
        onClick: () => dispatchProps.onClick(stateProps.taskData)
    };
};

export const SaveTaskButton = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SaveButton);