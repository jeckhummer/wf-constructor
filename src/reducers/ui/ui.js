import {combineReducers} from "redux";
import {taskEditor} from "./taskEditor";
import {WOEditor} from "./WOEditor";
import {editMode} from "./editMode";
import {customFieldEditor} from "./customFieldEditor";

export const ui = combineReducers({
    taskEditor,
    customFieldEditor,
    WOEditor,
    editMode
});