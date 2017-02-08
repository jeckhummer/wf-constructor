import React from 'react';
import {WorkflowEditor} from "../smart/WorkflowEditor";
import {TaskEditor} from "../smart/TaskEditor";
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