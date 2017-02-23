import {CheckboxListPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/CheckboxListPreviewTemplate";
import {FreeTextPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/FreeTextPreviewTemplate";
import {RadioButtonListPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/RadioButtonListPreviewTemplate";
import {TextStringPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/TextStringPreviewTemplate";
import {TypeSelectionPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/TypeSelectionPreviewTemplate";
import {AssetSelectionPreviewTemplate} from "./dumb/editor/custom_field/preview_templates/AssetSelectionPreviewTemplate";
import {TextStringFormTemplate} from "./dumb/editor/custom_field/form_templates/TextStringFormTemplate";
import {FreeTextFormTemplate} from "./dumb/editor/custom_field/form_templates/FreeTextFormTemplate";
import {TypeSelectionFormTemplate} from "./dumb/editor/custom_field/form_templates/TypeSelectionFormTemplate";
import {AssetSelectionFormTemplate} from "./dumb/editor/custom_field/form_templates/AssetSelectionFormTemplate";
import {RadioButtonListFormTemplate} from "./dumb/editor/custom_field/form_templates/RadioButtonListFormTemplate";
import {CheckboxListFormTemplate} from "./dumb/editor/custom_field/form_templates/CheckboxListFormTemplate";

export const CUSTOM_FIELD_TYPE_IDS = {
    FREE_TEXT: 'TXT',
    TYPE_SELECTION: 'DRP',
    ASSET_SELECTION: 'LNK',
    RADIO_BUTTON_LIST: 'RAD',
    CHECKBOX_LIST: 'CKB',
    TEXT_STRING: 'STR',
};

const CustomTextFieldDataValidator = data => {
    const isLabelValid = !!data.label;
    const result = isLabelValid;

    const errorMessage = result
        ? ""
        : isLabelValid ? null : 'Label shouldn\'t be empty. ';

    return {
        isLabelValid,
        result,
        errorMessage
    };
};

const CustomTextFieldDataProcessor = data => ({
    label: (data && data.label) || ""
});

const CustomListFieldDataValidator = data => {
    const isLabelValid = !!data.label;
    const isItemsListNotEmpty = !!data.items.length;
    const areAllItemsNotEmpty = data.items.every(item => !!item);
    const result = isLabelValid && isItemsListNotEmpty && areAllItemsNotEmpty;

    const errorMessage = result
        ? ""
        : (
            [
                !isLabelValid ? 'Label' : null,
                !isItemsListNotEmpty ? 'Items list' : null,
            ].filter(x => x != null)
                .join(' and ')
        ) + (!isLabelValid || !isItemsListNotEmpty ? ' shouldn\'t be empty. ' : '')
        + (
            areAllItemsNotEmpty
                ? ""
                : "No item should be empty. "
        );

    return {
        isLabelValid,
        isItemsListNotEmpty,
        areAllItemsNotEmpty,
        result,
        errorMessage
    };
};

const CustomListFieldDataProcessor = data => ({
    label: (data && data.label) || "",
    items: (data && data.items) || []
});

export const CUSTOM_FIELD_TYPES = {
    [CUSTOM_FIELD_TYPE_IDS.FREE_TEXT]: {
        id: CUSTOM_FIELD_TYPE_IDS.FREE_TEXT,
        name: 'Free text',
        formTemplate: FreeTextFormTemplate,
        previewTemplate: FreeTextPreviewTemplate,
        dataProcessor: CustomTextFieldDataProcessor,
        dataValidator: CustomTextFieldDataValidator
    },
    [CUSTOM_FIELD_TYPE_IDS.TEXT_STRING]: {
        id: CUSTOM_FIELD_TYPE_IDS.TEXT_STRING,
        name: 'Text string',
        formTemplate: TextStringFormTemplate,
        previewTemplate: TextStringPreviewTemplate,
        dataProcessor: CustomTextFieldDataProcessor,
        dataValidator: CustomTextFieldDataValidator
    },
    [CUSTOM_FIELD_TYPE_IDS.ASSET_SELECTION]: {
        id: CUSTOM_FIELD_TYPE_IDS.ASSET_SELECTION,
        name: 'Asset selection',
        formTemplate: AssetSelectionFormTemplate,
        previewTemplate: AssetSelectionPreviewTemplate,
        dataProcessor: CustomTextFieldDataProcessor,
        dataValidator: CustomTextFieldDataValidator
    },
    [CUSTOM_FIELD_TYPE_IDS.TYPE_SELECTION]: {
        id: CUSTOM_FIELD_TYPE_IDS.TYPE_SELECTION,
        name: 'Type selection',
        formTemplate: TypeSelectionFormTemplate,
        previewTemplate: TypeSelectionPreviewTemplate,
        dataProcessor: CustomListFieldDataProcessor,
        dataValidator: CustomListFieldDataValidator
    },
    [CUSTOM_FIELD_TYPE_IDS.RADIO_BUTTON_LIST]: {
        id: CUSTOM_FIELD_TYPE_IDS.RADIO_BUTTON_LIST,
        name: 'Radio button list',
        formTemplate: RadioButtonListFormTemplate,
        previewTemplate: RadioButtonListPreviewTemplate,
        dataProcessor: CustomListFieldDataProcessor,
        dataValidator: CustomListFieldDataValidator
    },
    [CUSTOM_FIELD_TYPE_IDS.CHECKBOX_LIST]: {
        id: CUSTOM_FIELD_TYPE_IDS.CHECKBOX_LIST,
        name: 'Checkbox list',
        formTemplate: CheckboxListFormTemplate,
        previewTemplate: CheckboxListPreviewTemplate,
        dataProcessor: CustomListFieldDataProcessor,
        dataValidator: CustomListFieldDataValidator
    },
};

export const DEFAULT_TASK_AF_MODE = true;
export const DEFAULT_TASK_NAME = '';
export const DEFAULT_TASK_STATUS_ID = '1';

export const DEFAULT_CUSTOM_FIELD_LABEL = '';