import {connect} from 'react-redux';
import {CancelButton} from "../../dumb/buttons/CancelButton";
import {closeCustomFieldEditor} from "../../actions/customFieldEditor";

const mapStateToProps = (state) => {
    return {
        content: "CANCEL",
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(closeCustomFieldEditor());
        }
    };
};

export const CloseCustomFieldEditorButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(CancelButton);