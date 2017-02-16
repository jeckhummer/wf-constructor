import {CheckboxListTemplate} from "./dumb/custom_fields_templates/CheckboxListTemplate";
import {FreeTextTemplate} from "./dumb/custom_fields_templates/FreeTextTemplate";
import {RadioButtonListTemplate} from "./dumb/custom_fields_templates/RadioButtonListTemplate";
import {TextStringTemplate} from "./dumb/custom_fields_templates/TextStringTemplate";
import {TypeSelectionTemplate} from "./dumb/custom_fields_templates/TypeSelectionTemplate";
import {AssetSelectionTemplate} from "./dumb/custom_fields_templates/AssetSelectionTemplate";

export const CUSTOM_FIELD_TYPES = {
    FREE_TEXT: {id: 'TXT', name: 'Free text', templateType: FreeTextTemplate},
    TYPE_SELECTION: {id: 'DRP', name: 'Type selection', templateType: TypeSelectionTemplate},
    ASSET_SELECTION: {id: 'LNK', name: 'Asset selection', templateType: AssetSelectionTemplate},
    RADIO_BUTTON_LIST: {id: 'RAD', name: 'Radio button list', templateType: RadioButtonListTemplate},
    CHECKBOX_LIST: {id: 'CKB', name: 'Checkbox list', templateType: CheckboxListTemplate},
    TEXT_STRING: {id: 'STR', name: 'Text string', templateType: TextStringTemplate},
};

export const DEFAULT_AF_MODE = true;
export const DEFAULT_TASK_NAME = '';