import {combineReducers} from "redux";
import {tasks} from "./tasks";
import {teams} from "./teams";
import {phases} from "./phases";
import {statuses} from "./statuses";
import {wo} from "./wo";

export const entities = combineReducers({
    wo,
    tasks,
    statuses,
    teams,
    phases,
});