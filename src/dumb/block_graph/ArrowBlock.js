import React from 'react';
import {COLORS, TASK_GRAPH} from '../../styles';
import {PlusButton} from "./PlusButton";

export const ArrowBlock = ({ interceptable, onClick }) => {
    return(
        <div style={{
            paddingTop: '14px',
            width: TASK_GRAPH.ARROW_BLOCK_WIDTH + 'px'
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
            { interceptable ? <PlusButton onClick={onClick}/> : null }
        </div>
    );
};
