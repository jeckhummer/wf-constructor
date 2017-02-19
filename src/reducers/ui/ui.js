import {combineReducers} from "redux";
import {taskEditor} from "./taskEditor";
import {workflowEditor} from "./workflowEditor";
import {editMode} from "./editMode";
import {customFieldEditor} from "./customFieldEditor";

export const ui = combineReducers({
    taskEditor,
    customFieldEditor,
    workflowEditor,
    editMode
});