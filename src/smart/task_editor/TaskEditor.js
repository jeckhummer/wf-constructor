import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../../dumb/editor/EditorModal";
import {getTaskEditorFormValidationResult} from "../../selectors/ui";
import {closeTaskEditor, saveTaskEditorTask} from "../../actions/taskEditor";
import {TaskEditorTabs} from "./TaskEditorTabs";
import {TaskEditorContent} from "./TaskEditorContent";
import {TaskEditorHeader} from "./TaskEditorHeader";

const mapStateToProps = (state) => {
    const {
        isNameValid,
        isPhaseValid,
        isTeamValid,
        result
    } = getTaskEditorFormValidationResult(state);

    const errorMessage = `
        ${!isNameValid ? 'Name shouldn\'t be empty. ' : ''}
        ${[
            !isPhaseValid ? 'Phase' : null,
            !isTeamValid ? 'Team' : null,
        ].filter(x => x != null)
        .join(' and ')} 
        ${!isPhaseValid || !isTeamValid ? 'should be selected.' : ''}
    `;

    return {
        isActive: true,
        header: <TaskEditorHeader/>,
        tabs: <TaskEditorTabs/>,
        content: <TaskEditorContent/>,
        saveButtonDisabled: !result,
        errorMessage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveClick: () => {
            dispatch(saveTaskEditorTask());
            dispatch(closeTaskEditor());
        },
        onCloseClick: () => dispatch(closeTaskEditor())
    };
};

export const TaskEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorModal);