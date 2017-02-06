import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../dumb/EditorModal";
import {getTaskEditorState} from "../selectors/ui";
import {closeTaskEditor} from "../actions/taskEditor";
import {SelectedTaskEditorControls} from "./SelectedTaskEditorControls";
import {TaskEditorTabs} from "./TaskEditorTabs";
import {SaveTaskButton} from "./SaveTaskButton";

const mapStateToProps = (state) => {
    const editorState = getTaskEditorState(state);
    const task = editorState.editedTask;

    if (!task) return {isActive: false};

    return {
        isActive: editorState.open,
        header: task && task.name,
        tabs: <TaskEditorTabs/>,
        content: <SelectedTaskEditorControls/>,
        actions: [<SaveTaskButton key="1"/>]
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