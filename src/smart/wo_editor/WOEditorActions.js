import React from 'react';
import {connect} from 'react-redux';
import {getTaskEditorState} from '../../selectors/ui';
import {SaveNewTaskButton} from "./SaveNewTaskButton";
import {SaveTaskButton} from "./SaveTaskButton";
import {CloseTaskEditorButton} from "./CloseTaskEditorButton";

const mapStateToProps = (state) => {
    const {isNewTask} = getTaskEditorState(state);
    return {isNewTask};
};

const component = ({isNewTask}) => {
    const NEW_TASK = 'NEW_TASK';
    const EXISTING_TASK = 'EXISTING_TASK';

    const actionTypeMap = {
        [NEW_TASK]: [CloseTaskEditorButton, SaveNewTaskButton],
        [EXISTING_TASK]: [CloseTaskEditorButton, SaveTaskButton]
    };

    return (
        <div>
            {
                actionTypeMap[isNewTask ? NEW_TASK : EXISTING_TASK]
                    .map((actionType, key) => React.createElement(actionType, {key}))
            }
        </div>
    );
};

export const WOEditorActions = connect(mapStateToProps)(component);