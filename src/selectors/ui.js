import {createSelector} from "reselect";

export const getTaskEditorState = state => state.ui.taskEditor;
export const getWorkflowEditorState = state => state.ui.workflowEditor;
export const getEditMode = state => state.ui.editMode;

export const getTaskEditorActiveTask = createSelector(
    [getTaskEditorState],
    (editor) => editor.task
);
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
