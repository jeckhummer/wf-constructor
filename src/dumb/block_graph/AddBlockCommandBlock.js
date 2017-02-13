import React from 'react';
import {PlusButton} from "./PlusButton";
import { WORKFLOW_GRID, TASK_BLOCK } from "../../styles";

export const AddBlockCommandBlock = ({ onClick }) => {
    const style = {
        width: TASK_BLOCK.WIDTH + 'px',
        height: TASK_BLOCK.HEIGHT + 'px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: `${WORKFLOW_GRID.BORDER.width}px ${WORKFLOW_GRID.BORDER.style} ${WORKFLOW_GRID.BORDER.color}`,
        borderRadius: `${TASK_BLOCK.BORDER.radius}px`
    };

    return (
        <div style={style}>
            <PlusButton size="large" onClick={onClick}/>
        </div>
    );
};
