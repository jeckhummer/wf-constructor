import React from 'react';
import {TASK_BLOCK, COLORS} from '../../styles';

export const ReadonlyTaskBlock = ({
    name,
    statusId,
    link
}) => {
    const {color, backgroundColor} = COLORS.STATUS[statusId];

    return (
        <div style={{
            width: TASK_BLOCK.WIDTH + 'px',
            height: TASK_BLOCK.HEIGHT + 'px',
            lineHeight: TASK_BLOCK.HEIGHT + 'px',
            textAlign: 'center',
            border: `${TASK_BLOCK.BORDER.width}px ${TASK_BLOCK.BORDER.style} ${TASK_BLOCK.BORDER.color}`,
            borderRadius: `${TASK_BLOCK.BORDER.radius}px`,
            overflow: 'hidden',
            padding: `0px ${TASK_BLOCK.PADDING}px`,
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            backgroundColor
        }}>
            <a
                href={link}
                style={{
                    color,
                    cursor: 'pointer'
                }}>
                {name}
            </a>
        </div>
    );
};