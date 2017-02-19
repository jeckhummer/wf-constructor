import {createSelector} from "reselect";

export const getTaskEditorState = state => state.ui.taskEditor;
export const getTaskEditorActiveTask = state => state.ui.taskEditor.task;
export const getTaskEditorTaskValidationResult = createSelector(
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

export const getWorkflowEditorState = state => state.ui.workflowEditor;

export const getEditMode = state => state.ui.editMode;

