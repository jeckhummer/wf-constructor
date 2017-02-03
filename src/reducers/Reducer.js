import {combineReducers} from "redux";
import {entities} from "./entities/entities";
import {relations} from "./relations/relations";

export const reducer = combineReducers({
    entities,
    relations
});