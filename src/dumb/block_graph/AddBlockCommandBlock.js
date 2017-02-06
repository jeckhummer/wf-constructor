import React from 'react';
import {PlusButton} from "./PlusButton";
import { TASK_GRAPH, TASK_BLOCK } from "../../styles";

export const AddBlockCommandBlock = ({ onClick }) => {
    const style = {
        width: TASK_BLOCK.WIDTH + 'px',
        height: TASK_BLOCK.HEIGHT + 'px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: `${TASK_GRAPH.BORDER.width}px ${TASK_GRAPH.BORDER.style} ${TASK_GRAPH.BORDER.color}`,
        borderRadius: `${TASK_BLOCK.BORDER.radius}px`
    };

    return (
        <div style={style}>
            <PlusButton size="large" onClick={onClick}/>
        </div>
    );
};
