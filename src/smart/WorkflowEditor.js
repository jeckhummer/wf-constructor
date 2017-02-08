import React from 'react';
import {Workflow} from "./Workflow";
import {PhaseRuler} from "./PhaseRuler";
import {TeamRuler} from "./TeamRuler";
import {EDITOR, COLORS} from '../styles';
import {Icon} from "semantic-ui-react";
import connect from "react-redux/es/connect/connect";
import {CoordinatePlane} from "../dumb/coordinate_plane/CoordinatePlane";

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

    return {
        hRulerContent: <PhaseRuler/>,
        vRulerContent: <TeamRuler/>,
        cornerContent,
        contentHeight: EDITOR.CONTENT.HEIGHT + 'px',
        contentWidth: EDITOR.CONTENT.WIDTH + 'px',
        cornerHeight: EDITOR.CORNER.HEIGHT + "px",
        cornerWidth: EDITOR.CORNER.WIDTH + "px",
        border: EDITOR.BORDER,
        children: <Workflow/>
    };
}

export const WorkflowEditor = connect(mapStateToProps)(CoordinatePlane);