import {combineReducers} from "redux";
import {tasks} from "./tasks";
import {teams} from "./teams";
import {phases} from "./phases";
import {statuses} from "./statuses";

export const entities = combineReducers({
    tasks,
    statuses,
    teams,
    phases
});