import {connect} from 'react-redux';
import {SaveButton} from "../../dumb/buttons/SaveButton";
import {updateTask, addNewTask} from "../../actions/tasks";
import {getTaskEditorState, getTaskEditorTaskValidationResult} from "../../selectors/ui";
import {closeTaskEditor} from "../../actions/ui";

const mapStateToProps = (state) => {
    const editorState = getTaskEditorState(state);
    const disabled = !getTaskEditorTaskValidationResult(state).result;
    const isNewTask = editorState.isNewTask;
    const task = editorState.task;

    return {
        content: "SAVE",
        task,
        disabled,
        isNewTask
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeTaskEditor: () => dispatch(closeTaskEditor()),
        updateTask: (task) => dispatch(updateTask(task.id, task)),
        addNewTask: (task) => dispatch(addNewTask(task))
    };
};

const mergeProps = (stateProps, dispatchProps) => {
    return {
        content: stateProps.content,
        disabled: stateProps.disabled,
        onClick: () => {
            if (stateProps.isNewTask) {
                dispatchProps.addNewTask(stateProps.task);
            } else {
                dispatchProps.updateTask(stateProps.task);
            }
            dispatchProps.closeTaskEditor();
        }
    };
};

export const SaveTaskButton = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SaveButton);