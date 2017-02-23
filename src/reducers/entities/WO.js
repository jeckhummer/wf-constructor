import {SAVE_WO} from "../../actions/WO";

const DEFAULT_STATE = {
    id: '',
    name: '',
    notificationMap: '0',
};

export const WO = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SAVE_WO:
            return {
                ...action.WO
            };
        default:
            return state;
    }
};