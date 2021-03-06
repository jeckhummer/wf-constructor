import React from 'react';
import {EditableWorkflow} from "./workflow/EditableWorkflow";
import {WorkflowPhaseRuler} from "./rulers/WorkflowPhaseRuler";
import {WorkflowTeamRuler} from "./rulers/WorkflowTeamRuler";
import {EDITOR, COLORS} from '../styles';
import {connect} from 'react-redux';
import {CoordinatePlane} from "../dumb/coordinate_plane/CoordinatePlane";
import {getTasks} from "../selectors/tasks";
import {NoTasksMessage} from "./workflow/NoTasksMessage";
import {getSortedPhases} from "../selectors/phases";
import {NoTasksWorkflow} from "./workflow/NoTasksWorkflow";
import {getEditMode} from "../selectors/ui";
import {ReadonlyWorkflow} from "./workflow/ReadonlyWorkflow";
import {WOEditorTrigger} from './wo_editor/WOEditorTrigger';

function mapStateToProps(state) {
    const editMode = getEditMode(state);

    const cornerContent = (
        <div style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.PRIMARY_CONTRAST
        }}>
            {
                editMode
                ? <WOEditorTrigger/>
                : null
            }
        </div>
    );

    let children;
    const noTasks = getTasks(state).length === 0;

    if (editMode) {
        const noPhases = getSortedPhases(state).length === 0;

        if (noTasks) {
            if (noPhases) {
                children = <NoTasksMessage/>;
            } else {
                children = <NoTasksWorkflow/>;
            }
        } else {
            children = <EditableWorkflow/>;
        }
    } else {
        if (noTasks) {
            children = <NoTasksMessage/>;
        } else {
            children = <ReadonlyWorkflow/>;
        }
    }

    return {
        hRulerContent: <WorkflowPhaseRuler/>,
        vRulerContent: <WorkflowTeamRuler/>,
        cornerContent,
        contentHeight: EDITOR.CONTENT.HEIGHT + 'px',
        contentWidth: EDITOR.CONTENT.WIDTH + 'px',
        cornerHeight: EDITOR.CORNER.HEIGHT + "px",
        cornerWidth: EDITOR.CORNER.WIDTH + "px",
        border: EDITOR.BORDER,
        children
    };
}

export const WorkflowEditor = connect(mapStateToProps)(CoordinatePlane);