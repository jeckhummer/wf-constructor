import {CheckboxListTemplate} from "./dumb/custom_fields_templates/CheckboxListTemplate";
import {FreeTextTemplate} from "./dumb/custom_fields_templates/FreeTextTemplate";
import {RadioButtonListTemplate} from "./dumb/custom_fields_templates/RadioButtonListTemplate";
import {TextStringTemplate} from "./dumb/custom_fields_templates/TextStringTemplate";
import {TypeSelectionTemplate} from "./dumb/custom_fields_templates/TypeSelectionTemplate";
import {AssetSelectionTemplate} from "./dumb/custom_fields_templates/AssetSelectionTemplate";

export const CUSTOM_FIELD_TYPE_IDS = {
    FREE_TEXT: 'TXT',
    TYPE_SELECTION: 'DRP',
    ASSET_SELECTION: 'LNK',
    RADIO_BUTTON_LIST: 'RAD',
    CHECKBOX_LIST: 'CKB',
    TEXT_STRING: 'STR',
};

export const CUSTOM_FIELD_TYPES = {
    [CUSTOM_FIELD_TYPE_IDS.FREE_TEXT]: {id: CUSTOM_FIELD_TYPE_IDS.FREE_TEXT, name: 'Free text', templateType: FreeTextTemplate},
    [CUSTOM_FIELD_TYPE_IDS.TYPE_SELECTION]: {id: CUSTOM_FIELD_TYPE_IDS.TYPE_SELECTION, name: 'Type selection', templateType: TypeSelectionTemplate},
    [CUSTOM_FIELD_TYPE_IDS.ASSET_SELECTION]: {id: CUSTOM_FIELD_TYPE_IDS.ASSET_SELECTION, name: 'Asset selection', templateType: AssetSelectionTemplate},
    [CUSTOM_FIELD_TYPE_IDS.RADIO_BUTTON_LIST]: {id: CUSTOM_FIELD_TYPE_IDS.RADIO_BUTTON_LIST, name: 'Radio button list', templateType: RadioButtonListTemplate},
    [CUSTOM_FIELD_TYPE_IDS.CHECKBOX_LIST]: {id: CUSTOM_FIELD_TYPE_IDS.CHECKBOX_LIST, name: 'Checkbox list', templateType: CheckboxListTemplate},
    [CUSTOM_FIELD_TYPE_IDS.TEXT_STRING]: {id: CUSTOM_FIELD_TYPE_IDS.TEXT_STRING, name: 'Text string', templateType: TextStringTemplate},
};

export const DEFAULT_TASK_AF_MODE = true;
export const DEFAULT_TASK_NAME = '';
export const DEFAULT_TASK_STATUS_ID = '1';

export const DEFAULT_CUSTOM_FIELD_LABEL = '';