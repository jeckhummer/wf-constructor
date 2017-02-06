import {createStateSaver} from './StateSaver';
import {API} from '../API/CurrentAPI';
import {CHANGE_ITEM_TRANSITION_STATUS} from '../actions/tasks';

let timeout = null;

const saveMethod = (state) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        API.saveState(state);
    }, 2000);
};
const filter = (action) => {
    return [
        CHANGE_ITEM_TRANSITION_STATUS
    ].indexOf(action.type) === -1;
};

export const ServerStateSaver = createStateSaver(saveMethod, filter);