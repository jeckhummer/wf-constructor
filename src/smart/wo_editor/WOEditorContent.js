import React from 'react';
import {connect} from 'react-redux';
import {getTaskEditorState} from '../../selectors/ui';
import {TASK_EDITOR_TABS} from "../../reducers/ui/taskEditor";
import {TaskEditorNotificationMap} from "./TaskEditorNotificationMap";
import {TaskEditorTaskForm} from "./TaskEditorTaskForm";
import {TaskCustomFieldManager} from "./TaskCustomFieldManager";

const mapStateToProps = (state) => {
    const {activeTab} = getTaskEditorState(state);
    return {activeTab};
};

const component = ({activeTab}) => {
    const contentMap = {
        [TASK_EDITOR_TABS.GENERAL]: <TaskEditorTaskForm/>,
        [TASK_EDITOR_TABS.NOTIFICATIONS]: <TaskEditorNotificationMap/>,
        [TASK_EDITOR_TABS.CUSTOM_FIELDS]: <TaskCustomFieldManager/>,
    };

    return contentMap[activeTab];
};

export const TaskEditorContent = connect(mapStateToProps)(component);