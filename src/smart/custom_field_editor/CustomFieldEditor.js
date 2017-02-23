import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../../dumb/editor/EditorModal";
import {getCustomFieldEditorFormValidationResult, getCustomFieldEditorState, getTaskEditorState} from "../../selectors/ui";
import {CustomFieldEditorContent} from "./CustomFieldEditorContent";
import {closeCustomFieldEditor} from "../../actions/customFieldEditor";
import {saveEditedCustomField} from "../../actions/taskEditor";

const mapStateToProps = (state) => {
    const saveButtonDisabled = !getCustomFieldEditorFormValidationResult(state).result;
    const {errorMessage} = getCustomFieldEditorFormValidationResult(state);

    const {isNewCustomField, customField} = getCustomFieldEditorState(state);
    const {isNewTask, task, customFields} = getTaskEditorState(state);
    const header = `
        ${isNewTask ? 'New task' : task.name}
         : 
        ${isNewCustomField 
            ? 'New custom field' 
            : customFields && customFields.find(x => x.id === customField.id).data.label}
    `;

    return {
        isActive: true,
        header: header,
        tabs: null,
        content: <CustomFieldEditorContent/>,
        saveButtonDisabled,
        errorMessage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveClick: () => {
            dispatch(saveEditedCustomField());
            dispatch(closeCustomFieldEditor());
        },
        onCloseClick: () => dispatch(closeCustomFieldEditor())
    };
};

export const CustomFieldEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorModal);