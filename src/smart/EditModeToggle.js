import {connect} from 'react-redux';
import {Checkbox} from "semantic-ui-react";
import {getEditMode} from "../selectors/ui";
import {toggleEditMode} from "../actions/ui";

const mapStateToProps = (state) => {
    const editMode = getEditMode(state);
    return {
        checked: editMode,
        toggle: true,
        label: 'EDIT MODE'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: () => dispatch(toggleEditMode())
    };
};

export const EditModeToggle = connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkbox);