import React from 'react';
import {EditableWorkflow} from "./EditableWorkflow";
import {PhaseRuler} from "./PhaseRuler";
import {TeamRuler} from "./TeamRuler";
import {EDITOR, COLORS} from '../styles';
import {Icon} from "semantic-ui-react";
import {connect} from 'react-redux';
import {CoordinatePlane} from "../dumb/coordinate_plane/CoordinatePlane";
import {getTasks} from "../selectors/tasks";
import {NoTasksMessage} from "./NoTasksMessage";
import {getSortedPhases} from "../selectors/phases";
import {NoTasksWorkflow} from "./NoTasksWorkflow";
import {getEditMode} from "../selectors/ui";
import {ReadonlyWorkflow} from "./ReadonlyWorkflow";

function mapStateToProps(state) {
    const cornerContent = (
        <div style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.PRIMARY_CONTRAST
        }}>
            <Icon
                link
                name="setting"
                fitted
                size='big'/>
        </div>
    );

    let children;
    const editMode = getEditMode(state);
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
        hRulerContent: <PhaseRuler/>,
        vRulerContent: <TeamRuler/>,
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