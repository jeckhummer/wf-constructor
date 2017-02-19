import React from 'react';
import {connect} from 'react-redux';
import {getTaskEditorState} from '../../selectors/ui';
import {TASK_EDITOR_TABS} from "../../reducers/ui/taskEditor";
import {SaveNewTaskButton} from "./SaveNewTaskButton";
import {SaveTaskButton} from "./SaveTaskButton";
import {CustomFieldEditorTrigger} from "./CustomFieldEditorTrigger";

const mapStateToProps = (state) => {
    const {isNewTask, activeTab} = getTaskEditorState(state);
    return {isNewTask, activeTab};
};

const component = ({activeTab, isNewTask}) => {
    const NEW_TASK = 'NEW_TASK';
    const EXISTING_TASK = 'EXISTING_TASK';

    const actionTypeMap = {
        [NEW_TASK]: {
            [TASK_EDITOR_TABS.GENERAL]: [SaveNewTaskButton],
            [TASK_EDITOR_TABS.NOTIFICATIONS]: [SaveNewTaskButton],
            [TASK_EDITOR_TABS.CUSTOM_FIELDS]: [CustomFieldEditorTrigger, SaveNewTaskButton],
        },
        [EXISTING_TASK]: {
            [TASK_EDITOR_TABS.GENERAL]: [SaveTaskButton],
            [TASK_EDITOR_TABS.NOTIFICATIONS]: [SaveTaskButton],
            [TASK_EDITOR_TABS.CUSTOM_FIELDS]: [CustomFieldEditorTrigger, SaveTaskButton],
        },
    };

    return (
        <div>
            {
                actionTypeMap[isNewTask ? NEW_TASK : EXISTING_TASK][activeTab]
                    .map((actionType, key) => React.createElement(actionType, {key}))
            }
        </div>
    );
};

export const TaskEditorActions = connect(mapStateToProps)(component);