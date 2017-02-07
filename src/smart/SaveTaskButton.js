import {connect} from 'react-redux';
import {SaveButton} from "../dumb/buttons/SaveButton";
import {updateTask, addNewTask} from "../actions/tasks";
import {getTaskEditorState} from "../selectors/ui";
import {closeTaskEditor} from "../actions/ui";

const mapStateToProps = (state) => {
    const editorState = getTaskEditorState(state);
    const isNewTask = editorState.isNewTask;
    const task = editorState.task;

    return {
        content: "SAVE",
        task,
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