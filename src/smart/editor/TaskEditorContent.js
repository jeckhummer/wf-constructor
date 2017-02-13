import React from 'react';
import {connect} from 'react-redux';
import {getTaskEditorState} from '../../selectors/ui';
import {TASK_EDITOR_TABS} from "../../reducers/ui/taskEditor";
import {NotificationMap} from "./NotificationMap";
import {TaskEditorTaskForm} from "./TaskEditorTaskForm";

const mapStateToProps = (state) => {
    const editorState = getTaskEditorState(state);
    const activeTab = editorState.activeTab;

    return {activeTab};
};

const component = ({activeTab}) => {
    const contentMap = {
        [TASK_EDITOR_TABS.GENERAL]: <TaskEditorTaskForm/>,
        [TASK_EDITOR_TABS.NOTIFICATIONS]: <NotificationMap/>,
        [TASK_EDITOR_TABS.CUSTOM_FIELDS]: null,
    };

    return contentMap[activeTab];
};

export const TaskEditorContent = connect(mapStateToProps)(component);