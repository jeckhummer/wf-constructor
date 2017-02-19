import React from 'react';
import {COLORS, WORKFLOW_GRID} from '../../styles';
import {PlusButton} from "./PlusButton";

export const EditableArrowBlock = ({ onClick }) => {
    return(
        <div style={{
            paddingTop: '14px',
            width: WORKFLOW_GRID.ARROW_BLOCK_WIDTH + 'px'
        }}>
            <div
                style={{
                textAlign: 'center',
                fontSize: '33px',
                color: COLORS.PRIMARY,
                paddingBottom: '2px'
            }}>
                →
            </div>
            <PlusButton onClick={onClick}/>
        </div>
    );
};
