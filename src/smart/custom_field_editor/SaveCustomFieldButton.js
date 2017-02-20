import {connect} from 'react-redux';
import {SaveButton} from "../../dumb/buttons/SaveButton";
import {updateEditedCustomField} from "../../actions/taskEditor";
import {closeCustomFieldEditor} from "../../actions/customFieldEditor";

const mapStateToProps = (state) => {
    return {
        content: "SAVE"
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(updateEditedCustomField());
            dispatch(closeCustomFieldEditor())
        }
    };
};

export const SaveCustomFieldButton = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SaveButton);