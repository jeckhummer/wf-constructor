import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../../dumb/editor/EditorModal";
import {getTaskEditorState} from "../../selectors/ui";
import {closeTaskEditor} from "../../actions/ui";
import {TaskEditorTabs} from "./TaskEditorTabs";
import {TaskFormValidationSummary} from "./TaskFormValidationSummary";
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