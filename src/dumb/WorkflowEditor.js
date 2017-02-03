import React from 'react';
import {CoordinatePlane} from "./coordinate_plane/CoordinatePlane";
import {Workflow} from "../smart/Workflow";
import {PhaseRuler} from "../smart/PhaseRuler";
import {TeamRuler} from "../smart/TeamRuler";
import {EDITOR, COLORS} from '../styles';
import {Icon} from "semantic-ui-react";

export const WorkflowEditor = () => {
    const hRulerContent = <PhaseRuler/>;
    const vRulerContent = <TeamRuler/>;

    const cornerContent = (
        <div style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.PRIMARY,
            color: COLORS.PRIMARY_CONTRAST
        }}>
            <Icon link name="setting" fitted size='big'/>
        </div>
    );

    return (
        <CoordinatePlane
            content={<Workflow/>}
            contentHeight={EDITOR.CONTENT.HEIGHT + 'px'}
            contentWidth={EDITOR.CONTENT.WIDTH + 'px'}
            cornerContent={cornerContent}
            hRulerContent={hRulerContent}
            vRulerContent={vRulerContent}
            cornerHeight={EDITOR.CORNER.HEIGHT + "px"}
            cornerWidth={EDITOR.CORNER.WIDTH + "px"}
            border={EDITOR.BORDER}
        />
    );
};