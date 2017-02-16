import {combineReducers} from "redux";
import {entities} from "./entities/entities";
import {ui} from "./ui/ui";
import {cache} from "./cache";

export const reducer = combineReducers({
    entities,
    cache,
    ui
});