import {connect} from 'react-redux';
import {SaveButton} from "../../dumb/buttons/SaveButton";
import {getTaskEditorTaskValidationResult} from "../../selectors/ui";
import {closeTaskEditor, saveEditorNewTask} from "../../actions/ui";

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
            dispatch(saveEditorNewTask());
            dispatch(closeTaskEditor());
        }
    };
};

export const SaveNewTaskButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(SaveButton);