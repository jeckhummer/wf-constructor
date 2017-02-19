import React from 'react';
import {connect} from 'react-redux';
import {SaveButton} from "../../dumb/buttons/SaveButton";
import {saveEditedCustomField} from "../../actions/taskEditor";
import {closeCustomFieldEditor} from "../../actions/customFieldEditor";

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(saveEditedCustomField());
            dispatch(closeCustomFieldEditor())
        }
    };
};

const component = ({onClick}) => {
    return (
        <SaveButton
            content="SAVE"
            onClick={onClick}
        />
    );
};

export const CustomFieldEditorActions = connect(
    mapStateToProps,
    mapDispatchToProps,
)(component);