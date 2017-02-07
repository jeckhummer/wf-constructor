import React from 'react';
import {TASK_BLOCK} from '../../styles';
import {Covered} from "../common/Covered";
import {TaskBlockCover} from "./TaskBlockCover";

export const EditableTaskBlock = ({
    name,
    first,
    last,
    onPrevClick,
    onNextClick,
    onEditClick,
    onDeleteClick
}) => {
    const cover = (
        <TaskBlockCover
            first={first}
            last={last}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
            onSettingsClick={onEditClick}
            onDeleteClick={onDeleteClick}
        />
    );

    return (
        <Covered cover={cover}>
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
                ...TASK_BLOCK.COLORS
            }}>
                {name}
            </div>
        </Covered>
    );
};