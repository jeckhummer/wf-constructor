import React from 'react';
import {getCustomFieldEditorState, getTaskEditorState} from "../../selectors/ui";
import {connect} from "react-redux";

export const component = ({header}) => {
   return (
       <span> {header} </span>
   );
};

export const mapStateToProps = (state) => {
    const {isNewCustomField, customField} = getCustomFieldEditorState(state);
    const {isNewTask, task} = getTaskEditorState(state);
    const header = `
        ${isNewTask ? 'New task' : task.name}
         : 
        ${isNewCustomField ? 'New custom field' : customField.data.label}
    `;

    return {header};
};

export const CustomFieldEditorHeader = connect(mapStateToProps)(component);