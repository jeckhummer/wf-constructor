import {getWO} from "../selectors/WO";
import {getWOCustomFieldsCache} from "../selectors/cache";
import {cacheWOCustomFields} from "./cache";
import {API} from '../API/CurrentAPI';

export const OPEN_WO_EDITOR = 'OPEN_WO_EDITOR';
export function openWOEditor() {
    return (dispatch, getState) => {
        const state = getState();
        const WO = getWO(state);
        const customFieldsCache = getWOCustomFieldsCache(state);

        if (customFieldsCache) {
            dispatch(setWOCustomFields(customFieldsCache));
        } else {
            dispatch(setWOCustomFieldsLoadingAnimationVisibility(true));
            dispatch(setWOCustomFields([]));

            API.getWOCustomFields(WO.id)
                .then(fields => {
                    dispatch(cacheWOCustomFields(fields));
                    dispatch(setWOCustomFields(fields));
                    dispatch(setWOCustomFieldsLoadingAnimationVisibility(false));
                });
        }

        dispatch({
            type: OPEN_WO_EDITOR,
            WO
        });
    };
}

export const CLOSE_WO_EDITOR = 'CLOSE_WO_EDITOR';
export function closeWOEditor() {
    return (dispatch) => {
        dispatch({
            type: CLOSE_WO_EDITOR,
        });
    };
}

export const OPEN_WO_EDITOR_TAB = 'OPEN_WO_EDITOR_TAB';
export function openWOEditorTab(tab) {
    return (dispatch) => {
        dispatch({
            type: OPEN_WO_EDITOR_TAB,
            tab
        });
    };
}

export const SET_WO_CUSTOM_FIELDS = 'SET_WO_CUSTOM_FIELDS';
export function setWOCustomFields(fields) {
    return (dispatch) => {
        dispatch({
            type: SET_WO_CUSTOM_FIELDS,
            fields
        });
    };
}

export const SET_WO_CUSTOM_FIELDS_LOADING_ANIMATION_VISIBILITY = 'SET_WO_CUSTOM_FIELDS_LOADING_ANIMATION_VISIBILITY';
export function setWOCustomFieldsLoadingAnimationVisibility(visible) {
    return (dispatch) => {
        dispatch({type: SET_WO_CUSTOM_FIELDS_LOADING_ANIMATION_VISIBILITY, visible});
    };
}

export const UPDATE_EDITOR_WO = 'UPDATE_EDITOR_WO';
export function updateWOEditorWO(diff) {
    return (dispatch) => {
        dispatch({type: UPDATE_EDITOR_WO, diff});
    };
}