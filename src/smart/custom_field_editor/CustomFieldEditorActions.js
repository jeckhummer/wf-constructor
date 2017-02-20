import React from 'react';
import {connect} from 'react-redux';
import {getCustomFieldEditorState} from "../../selectors/ui";
import {AddNewCustomFieldButton} from "./AddNewCustomFieldButton";
import {SaveCustomFieldButton} from "./SaveCustomFieldButton";

const mapStateToProps = (state) => {
    const {isNewCustomField} = getCustomFieldEditorState(state);

    return {isNewCustomField};
};

const component = ({isNewCustomField}) => {
    return (
        isNewCustomField ? <AddNewCustomFieldButton/> : <SaveCustomFieldButton/>
    )
};

export const CustomFieldEditorActions = connect(mapStateToProps)(component);