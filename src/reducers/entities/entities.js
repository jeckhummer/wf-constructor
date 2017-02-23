import {combineReducers} from "redux";
import {tasks} from "./tasks";
import {teams} from "./teams";
import {phases} from "./phases";
import {statuses} from "./statuses";
import {WO} from "./WO";

export const entities = combineReducers({
    WO,
    tasks,
    statuses,
    teams,
    phases,
});