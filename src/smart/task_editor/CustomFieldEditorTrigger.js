import {connect} from 'react-redux';
import {AddButton} from "../../dumb/buttons/AddButton";
import {openCustomFieldEditorForAdding} from "../../actions/customFieldEditor";

const mapStateToProps = (state) => {
    return {
        content: "ADD NEW FIELD",
        color: 'blue'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(openCustomFieldEditorForAdding())
    };
};

export const CustomFieldEditorTrigger = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddButton);