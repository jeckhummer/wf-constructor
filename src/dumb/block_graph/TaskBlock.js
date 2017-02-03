import React from 'react';
import {TASK_BLOCK} from '../../styles';
import {Covered} from "../common/Covered";
import {TaskBlockCover} from "./TaskBlockCover";

export const TaskBlock = ({
    name,
    first,
    last,
    backgroundColor,
    color,
    onPrevClick,
    onNextClick,
    onSettingsClick,
    onDeleteClick
}) => {
    const cover = (
        <TaskBlockCover
            first={first}
            last={last}
            onPrevClick={onPrevClick}
            onNextClick={onNextClick}
            onSettingsClick={onSettingsClick}
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
                backgroundColor,
                color
            }}>
                {name}
            </div>
        </Covered>
    );
};