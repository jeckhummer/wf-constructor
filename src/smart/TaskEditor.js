import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../dumb/EditorModal";
import {getTaskEditorState} from "../selectors/ui";
import {closeTaskEditor} from "../actions/ui";
import {TaskEditorDataControls} from "./TaskEditorDataControls";
import {TaskEditorTabs} from "./TaskEditorTabs";
import {SaveTaskButton} from "./SaveTaskButton";

const mapStateToProps = (state) => {
    const editorState = getTaskEditorState(state);
    const task = editorState.task;

    if (!task) return {isActive: false};

    return {
        isActive: editorState.open,
        header: task && task.name,
        tabs: <TaskEditorTabs/>,
        content: <TaskEditorDataControls/>,
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