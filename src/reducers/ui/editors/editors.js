import {combineReducers} from "redux";
import {task} from "./task";
import {workflow} from "./workflow";
import {newTask} from "./newTask";

export const editors = combineReducers({
    newTask,
    task,
    workflow
});