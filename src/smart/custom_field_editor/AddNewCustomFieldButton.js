import {connect} from 'react-redux';
import {SaveButton} from "../../dumb/buttons/SaveButton";
import {saveNewEditedCustomField} from "../../actions/taskEditor";
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
            dispatch(saveNewEditedCustomField());
            dispatch(closeCustomFieldEditor())
        }
    };
};

export const AddNewCustomFieldButton = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SaveButton);