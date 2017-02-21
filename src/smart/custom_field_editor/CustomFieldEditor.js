import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../../dumb/editor/EditorModal";
import {getCustomFieldEditorFormValidationResult, getCustomFieldEditorState} from "../../selectors/ui";
import {CustomFieldEditorHeader} from "./CustomFieldEditorHeader";
import {CustomFieldEditorContent} from "./CustomFieldEditorContent";
import {closeCustomFieldEditor} from "../../actions/customFieldEditor";
import {saveEditedCustomField} from "../../actions/taskEditor";

const mapStateToProps = (state) => {
    const saveButtonDisabled = !getCustomFieldEditorFormValidationResult(state).result;
    const {
        isLabelValid,
        isItemsListNotEmpty,
        areAllItemsNotEmpty,
        result,
    } = getCustomFieldEditorFormValidationResult(state);

    const errorMessage = result
        ? ""
        : (
            [
                !isLabelValid ? 'Label' : null,
                !isItemsListNotEmpty ? 'Items list' : null,
            ].filter(x => x != null)
            .join(' and ')
        ) + (!isLabelValid || !isItemsListNotEmpty ? ' shouldn\'t be empty. ' : '')
        + (
            areAllItemsNotEmpty
                ? ""
                : "No item should be empty. "
        );

    return {
        isActive: true,
        header: <CustomFieldEditorHeader/>,
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