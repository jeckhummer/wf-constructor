import React from 'react';
import {WorkflowEditor} from "./WorkflowEditor";
import {TaskEditor} from "./task_editor/TaskEditor";
import {EditModeToggle} from "./EditModeToggle";
import {CustomFieldEditor} from "./custom_field_editor/CustomFieldEditor";
import {connect} from "react-redux";
import {getTaskEditorState, getWOEditorState, getCustomFieldEditorState} from "../selectors/ui";
import {WOEditor} from "./wo_editor/WOEditor";

const component = ({
    workflowEditorOpened,
    taskEditorOpened,
    customFieldEditorOpened
}) => {
    return (
        <div>
            <EditModeToggle/>
            <br/> <br/>

            <WorkflowEditor/>

            {workflowEditorOpened ? <WOEditor/> : null}
            {taskEditorOpened ? <TaskEditor/> : null}
            {customFieldEditorOpened ? <CustomFieldEditor/> : null}
        </div>
    );
};

const mapStateToProps = (state) => {
    const taskEditorOpened = getTaskEditorState(state).open;
    const customFieldEditorOpened = getCustomFieldEditorState(state).open;
    const workflowEditorOpened = getWOEditorState(state).open;

    return {
        workflowEditorOpened,
        taskEditorOpened,
        customFieldEditorOpened
    };
};

export const App = connect(mapStateToProps)(component);