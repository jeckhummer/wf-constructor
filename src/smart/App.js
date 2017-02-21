import React from 'react';
import {WorkflowEditor} from "./task_editor/WorkflowEditor";
import {TaskEditor} from "./task_editor/TaskEditor";
import {EditModeToggle} from "./EditModeToggle";
import {CustomFieldEditor} from "./custom_field_editor/CustomFieldEditor";
import {connect} from "react-redux";
import {getTaskEditorState, getWorkflowEditorState, getCustomFieldEditorState} from "../selectors/ui";

const component = ({
    workflowEditorOpened,
    taskEditorOpened,
    customFieldEditorOpened
}) => {
    return (
        <div>
            <EditModeToggle/>
            <br/>
            <br/>
            <WorkflowEditor/>
            {workflowEditorOpened ? null : null}
            {taskEditorOpened ? <TaskEditor/> : null}
            {customFieldEditorOpened ? <CustomFieldEditor/> : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    const taskEditorOpened = getTaskEditorState(state).open;
    const customFieldEditorOpened = getCustomFieldEditorState(state).open;
    const workflowEditorOpened = getWorkflowEditorState(state).open;

    return {
        workflowEditorOpened,
        taskEditorOpened,
        customFieldEditorOpened
    };
};

export const App = connect(mapStateToProps)(component);