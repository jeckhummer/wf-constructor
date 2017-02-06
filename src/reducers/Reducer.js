import {combineReducers} from "redux";
import {entities} from "./entities/entities";
import {relations} from "./relations/relations";
import {ui} from "./ui/ui";

export const reducer = combineReducers({
    entities,
    relations,
    ui
});