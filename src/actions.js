import {Mode, Status, TransitionStatus} from './catalogs/ItemDescriptors';
import {
    getSortedItems,
    hasDuplicatedItems,
    getEditedItems
} from './selectors';
import {API} from './API/CurrentAPI';
import {UOMs} from "./catalogs/UOM";
import * as _ from 'lodash';

export const ADD_ITEM = 'ADD_ITEM';
export function addItem() {
    return (dispatch, getState) => {
        const items = getState().items;

        const newItemId = items.length + 1;
        const newItem = {
            id: newItemId,
            name: '',
            comment: '',
            UOM: UOMs.PCS,
            cost: 0,
            quantity: 1,
            deliveryDays: '0',
            mode: Mode.EDIT,
            status: Status.DRAFT,
            previousStatus: Status.DRAFT,
            transitionStatus: TransitionStatus.NONE
        };

        dispatch({
            type: ADD_ITEM,
            item: newItem
        });
    };
}

export const SAVE_ITEM = 'SAVE_ITEM';
export function saveItem(itemId) {
    return (dispatch, getState) => {
        const state = getState();
        const items = state.items;

        if(checkItemsForDuplicates(state)){
            return;
        }

        const item = _.find(items, {id: itemId});
        let approve = API.saveItem(item);

        dispatch(
            doWithTransition(
                (id) => {
                    dispatch({
                        type: SAVE_ITEM,
                        itemId: itemId,
                        newItemId: id
                    });
                    dispatch(changeItemMode(id, Mode.READ));
                },
                TransitionStatus.SAVING,
                itemId,
                approve
            )
        );
    };
}

export function saveAllEditedItems() {
    return (dispatch, getState) => {
        const editedItems = getEditedItems(getState());

        editedItems.forEach(
            (item) => dispatch(saveItem(item.id))
        );
    };
}

export const UPDATE_ITEM = 'UPDATE_ITEM';
export function updateItem(item) {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_ITEM',
            item: {
                ...item,
                cost: Math.abs(item.cost),
                quantity: Math.abs(item.quantity),
                deliveryDays: Math.abs(item.deliveryDays),
            }
        });
    };
}

export const REMOVE_ITEM = 'REMOVE_ITEM';
export function removeItem(itemId) {
    return (dispatch, getState) => {
        const items = getSortedItems(getState());
        const item = _.find(items, {id: itemId});

        if (item === undefined) {
            return;
        }

        let approve = item.status === Status.DRAFT
            ? Promise.resolve()
            : API.removeItem(itemId);

        dispatch(
            doWithTransition(
                () => dispatch({
                    type: REMOVE_ITEM,
                    itemId
                }),
                TransitionStatus.REMOVING,
                itemId,
                approve
            )
        );
    };
}

export const RESTORE_ITEM = 'RESTORE_ITEM';
export function restoreItem(itemId) {
    return (dispatch, getState) => {
        const items = getSortedItems(getState());
        const item = _.find(items, {id: itemId});

        if (item === undefined) {
            return;
        }

        let approve = item.previousStatus === Status.DRAFT
            ? Promise.resolve()
            : API.saveItem(item);

        dispatch(
            doWithTransition(
                (id) => {
                    dispatch({
                        type: SAVE_ITEM,
                        itemId: itemId,
                        newItemId: id
                    });
                    dispatch(changeItemMode(id, Mode.READ));
                },
                TransitionStatus.RESTORING,
                itemId,
                approve
            )
        );
    };
}

export const CHANGE_ITEM_MODE = 'CHANGE_ITEM_MODE';
export function changeItemMode(itemId, mode) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_ITEM_MODE,
            itemId,
            mode
        });
    };
}

export const CHANGE_ITEM_TRANSITION_STATUS = 'CHANGE_ITEM_TRANSITION_STATUS';
export function changeItemTransitionStatus(itemId, transitionStatus) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_ITEM_TRANSITION_STATUS,
            itemId,
            transitionStatus
        });
    };
}

export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export function changeCurrency(currency) {
    return (dispatch, getState) => {
        dispatch({
            type: CHANGE_CURRENCY,
            currency
        });

        const newCurrency = getState().currency;
        API.saveCurrency(newCurrency);
    };
}

export const TOGGLE_IS_VAT_PAYER = 'TOGGLE_IS_VAT_PAYER';
export function toggleIsVATPayer() {
    return (dispatch, getState) => {
        dispatch({
            type: TOGGLE_IS_VAT_PAYER,
        });

        const isVATPayer = getState().isVATPayer;
        API.saveIsVATPayer(isVATPayer);
    };
}

export function checkItemsForDuplicates(state) {
    return hasDuplicatedItems(state);
}

function doWithTransition(onSuccess, transitionStatus, itemId, approve) {
    return (dispatch) => {
        dispatch(changeItemTransitionStatus(itemId, transitionStatus));
        approve.then((arg) => {
            dispatch(changeItemTransitionStatus(itemId, TransitionStatus.NONE));
            dispatch(() => onSuccess(arg));
        });
    };
}