import React from 'react';
import {WorkflowEditor} from "../smart/task_editor/WorkflowEditor";
import {TaskEditor} from "../smart/task_editor/TaskEditor";
import {EditModeToggle} from "../smart/EditModeToggle";
import {CustomFieldEditor} from "../smart/custom_field_editor/CustomFieldEditor";

export const App = () => {
    return (
        <div>
            <EditModeToggle/>
            <br/>
            <br/>
            <WorkflowEditor/>
            <TaskEditor/>
            <CustomFieldEditor/>
        </div>
    );
};