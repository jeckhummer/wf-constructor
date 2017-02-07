import {combineReducers} from "redux";
import {taskEditor} from "./taskEditor";
import {workflowEditor} from "./workflowEditor";
import {editMode} from "./editMode";

export const ui = combineReducers({
    taskEditor,
    workflowEditor,
    editMode
});