import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../../dumb/editor/EditorModal";
import {getTaskEditorState} from "../../selectors/ui";
import {closeTaskEditor} from "../../actions/ui";
import {TaskEditorTabs} from "./TaskEditorTabs";
import {SaveTaskButton} from "./SaveTaskButton";
import {TaskFormValidationSummary} from "./TaskFormValidationSummary";
import {} from '../../constants';
import {TaskEditorContent} from "./TaskEditorContent";

const mapStateToProps = (state) => {
    const editorState = getTaskEditorState(state);
    const isNewTask = editorState.isNewTask;
    const task = editorState.task;
    const active = editorState.open;
    const header = isNewTask ? 'New task' : task.name;

    return {
        isActive: active,
        header,
        tabs: <TaskEditorTabs/>,
        content: <TaskEditorContent/>,
        actions: [<SaveTaskButton key="1"/>],
        alert: <TaskFormValidationSummary/>
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseClick: () => dispatch(closeTaskEditor())
    };
};

export const TaskEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorModal);