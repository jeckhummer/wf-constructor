import {createSelector} from "reselect";
import {CUSTOM_FIELD_TYPES} from "../constants";

export const getTaskEditorState = state => state.ui.taskEditor;
export const getTaskEditorActiveTask = state => state.ui.taskEditor.task;
export const getTaskEditorFormValidationResult = createSelector(
    [getTaskEditorActiveTask],
    task => {
        const isNameValid = task.name.length > 0;
        const isPhaseValid = task.phaseId !== null;
        const isTeamValid = task.teamId !== null;

        return {
            result: isNameValid && isPhaseValid && isTeamValid,
            isNameValid,
            isPhaseValid,
            isTeamValid,
        };
    }
);

export const getCustomFieldEditorState = state => state.ui.customFieldEditor;
export const getCustomFieldEditorActiveCustomField = state => state.ui.customFieldEditor.customField;
export const getCustomFieldEditorFormValidationResult = createSelector(
    [getCustomFieldEditorActiveCustomField],
    field => {
        const validationResult = CUSTOM_FIELD_TYPES[field.typeId]
            ? CUSTOM_FIELD_TYPES[field.typeId].dataValidator(field.data)
            : {};
        return validationResult;
    }
);


export const getWorkflowEditorState = state => state.ui.workflowEditor;

export const getEditMode = state => state.ui.editMode;

