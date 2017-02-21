import {connect} from 'react-redux';
import {SaveButton} from "../../dumb/buttons/SaveButton";
import {getTaskEditorFormValidationResult} from "../../selectors/ui";
import {closeTaskEditor, saveTaskEditorExistingTask} from "../../actions/taskEditor";

const mapStateToProps = (state) => {
    const disabled = !getTaskEditorFormValidationResult(state).result;

    return {
        content: "SAVE",
        disabled,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(saveTaskEditorExistingTask());
            dispatch(closeTaskEditor());
        }
    };
};

export const SaveTaskButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(SaveButton);