import {connect} from 'react-redux';
import {SaveButton} from "../../dumb/buttons/SaveButton";
import {saveExistingEditedCustomField} from "../../actions/taskEditor";
import {closeCustomFieldEditor} from "../../actions/customFieldEditor";
import {getCustomFieldEditorFormValidationResult} from "../../selectors/ui";

const mapStateToProps = (state) => {
    const {result} = getCustomFieldEditorFormValidationResult(state);

    return {
        content: "SAVE",
        disabled: !result,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(saveExistingEditedCustomField());
            dispatch(closeCustomFieldEditor())
        }
    };
};

export const SaveCustomFieldButton = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SaveButton);