import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../../dumb/editor/EditorModal";
import {getTaskEditorFormValidationResult, getTaskEditorState} from "../../selectors/ui";
import {closeTaskEditor, saveTaskEditorTask, openTaskEditorTab} from "../../actions/taskEditor";
import {TaskEditorContent} from "./TaskEditorContent";
import {TASK_EDITOR_TABS} from "../../reducers/ui/taskEditor";

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

    const {isNewTask, task} = getTaskEditorState(state);
    const header = isNewTask ? 'New task' : task.name;

    const {activeTab} = getTaskEditorState(state);
    const tabs = [
        {
            name: 'General',
            value: TASK_EDITOR_TABS.GENERAL,
            active: activeTab === TASK_EDITOR_TABS.GENERAL
        },
        {
            name: 'Custom fields',
            value: TASK_EDITOR_TABS.CUSTOM_FIELDS,
            active: activeTab === TASK_EDITOR_TABS.CUSTOM_FIELDS
        },
        {
            name: 'Notifications',
            value: TASK_EDITOR_TABS.NOTIFICATIONS,
            active: activeTab === TASK_EDITOR_TABS.NOTIFICATIONS,
        },
    ];

    return {
        isActive: true,
        header: header,
        content: <TaskEditorContent/>,
        saveButtonDisabled: !result,
        errorMessage,
        tabs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveClick: () => {
            dispatch(saveTaskEditorTask());
            dispatch(closeTaskEditor());
        },
        onCloseClick: () => dispatch(closeTaskEditor()),
        onTabClick: (_, {value}) => dispatch(openTaskEditorTab(value))
    };
};

export const TaskEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorModal);