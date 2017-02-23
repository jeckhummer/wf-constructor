import {
    CLOSE_WO_EDITOR,
    OPEN_WO_EDITOR,
    OPEN_WO_EDITOR_TAB,
    UPDATE_EDITOR_WO
} from '../../actions/WOEditor';

export const WO_EDITOR_TABS = {
    CUSTOM_FIELDS: 1,
    NOTIFICATIONS: 2
};

const DEFAULT_STATE = {
    open: false,
    activeTab: WO_EDITOR_TABS.CUSTOM_FIELDS,
    WO: {},
    selectedCustomFieldId: {},
    customFieldsLoading: false,
    customFields: null
};

export const WOEditor = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case OPEN_WO_EDITOR:
            return {
                ...state,
                open: true,
                WO: action.WO
            };
        case CLOSE_WO_EDITOR:
            return DEFAULT_STATE;
        case OPEN_WO_EDITOR_TAB:
            return {
                ...state,
                activeTab: action.tab
            };
        case UPDATE_EDITOR_WO:
            return {
                ...state,
                WO: {
                    ...state.WO,
                    ...action.diff
                }
            };
        default:
            return state;
    }
};