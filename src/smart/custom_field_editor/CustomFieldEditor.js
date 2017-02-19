import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../../dumb/task_editor/EditorModal";
import {getCustomFieldEditorState} from "../../selectors/ui";
import {CustomFieldEditorAlerts} from "./CustomFieldEditorAlerts";
import {CustomFieldEditorHeader} from "./CustomFieldEditorHeader";
import {CustomFieldEditorContent} from "./CustomFieldEditorContent";
import {CustomFieldEditorActions} from "./CustomFieldEditorActions";
import {closeCustomFieldEditor} from "../../actions/customFieldEditor";

const mapStateToProps = (state) => {
    const {open} = getCustomFieldEditorState(state);

    return {
        isActive: open,
        header: <CustomFieldEditorHeader/>,
        tabs: null,
        content: <CustomFieldEditorContent/>,
        actions: <CustomFieldEditorActions/>,
        alert: <CustomFieldEditorAlerts/>
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseClick: () => dispatch(closeCustomFieldEditor())
    };
};

export const CustomFieldEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorModal);