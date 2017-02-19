import {connect} from 'react-redux';
import {SaveButton} from "../../dumb/buttons/SaveButton";
import {getTaskEditorTaskValidationResult} from "../../selectors/ui";
import {closeTaskEditor, saveTaskEditorNewTask} from "../../actions/taskEditor";

const mapStateToProps = (state) => {
    const disabled = !getTaskEditorTaskValidationResult(state).result;

    return {
        content: "SAVE",
        disabled,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(saveTaskEditorNewTask());
            dispatch(closeTaskEditor());
        }
    };
};

export const SaveNewTaskButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(SaveButton);