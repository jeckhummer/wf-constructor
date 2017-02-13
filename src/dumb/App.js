import React from 'react';
import {WorkflowEditor} from "../smart/editor/WorkflowEditor";
import {TaskEditor} from "../smart/editor/TaskEditor";
import {EditModeToggle} from "../smart/EditModeToggle";

export const App = () => {
    return (
        <div>
            <EditModeToggle/>
            <br/>
            <br/>
            <WorkflowEditor/>
            <TaskEditor/>
        </div>
    );
};