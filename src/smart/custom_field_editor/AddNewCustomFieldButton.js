import {connect} from 'react-redux';
import {SaveButton} from "../../dumb/buttons/SaveButton";
import {addNewEditedCustomField} from "../../actions/taskEditor";
import {closeCustomFieldEditor} from "../../actions/customFieldEditor";

const mapStateToProps = (state) => {
    return {
        content: "SAVE"
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(addNewEditedCustomField());
            dispatch(closeCustomFieldEditor())
        }
    };
};

export const AddNewCustomFieldButton = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SaveButton);