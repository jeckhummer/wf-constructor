import {createStateSaver} from './StateSaver';
import * as Cookies from "js-cookie";

export const CookiesStateSaver = createStateSaver(
    (state) => Cookies.set('state', JSON.stringify(state))
);