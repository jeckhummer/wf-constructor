import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../../dumb/editor/EditorModal";
import {getTaskEditorState} from "../../selectors/ui";
import {closeTaskEditor} from "../../actions/ui";
import {TaskEditorTabs} from "./TaskEditorTabs";
import {SaveTaskButton} from "./SaveTaskButton";
import {TaskFormValidationSummary} from "./TaskFormValidationSummary";
import {TaskEditorContent} from "./TaskEditorContent";
import {SaveNewTaskButton} from "./SaveNewTaskButton";

const mapStateToProps = (state) => {
    const {isNewTask, task, open} = getTaskEditorState(state);
    const header = isNewTask ? 'New task' : task.name;

    return {
        isActive: open,
        header,
        tabs: <TaskEditorTabs/>,
        content: <TaskEditorContent/>,
        actions: [isNewTask ? <SaveNewTaskButton key="1"/> : <SaveTaskButton key="1"/> ],
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