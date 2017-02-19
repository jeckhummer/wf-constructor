import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../../dumb/task_editor/EditorModal";
import {getTaskEditorState} from "../../selectors/ui";
import {closeTaskEditor} from "../../actions/taskEditor";
import {TaskEditorTabs} from "./TaskEditorTabs";
import {TaskEditorAlerts} from "./TaskEditorAlerts";
import {TaskEditorContent} from "./TaskEditorContent";
import {TaskEditorActions} from "./TaskEditorActions";
import {TaskEditorHeader} from "./TaskEditorHeader";

const mapStateToProps = (state) => {
    const {open} = getTaskEditorState(state);

    return {
        isActive: open,
        header: <TaskEditorHeader/>,
        tabs: <TaskEditorTabs/>,
        content: <TaskEditorContent/>,
        actions: <TaskEditorActions/>,
        alert: <TaskEditorAlerts/>
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