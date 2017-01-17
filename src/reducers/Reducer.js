import {combineReducers} from 'redux';
import {items} from './Items';
import {currency} from "./Currency";
import {isVATPayer} from "./isVATPayer";

export const reducer = combineReducers({
    items,
    currency,
    isVATPayer
});