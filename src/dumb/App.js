import React from 'react';
import {WorkflowEditor} from "./WorkflowEditor";
import {TaskEditor} from "../smart/TaskEditor";
import {NewTaskEditor} from "../smart/NewTaskEditor";

export const App = () => {
    return (
        <div>
            <WorkflowEditor/>
            <TaskEditor/>
            <NewTaskEditor/>
        </div>
    );
};