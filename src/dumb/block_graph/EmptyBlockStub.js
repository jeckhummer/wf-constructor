import React from 'react';
import {TASK_BLOCK} from '../../styles';

export const EmptyBlockStub = () => {
    return (
        <div style={{
            height: TASK_BLOCK.HEIGHT + 'px',
            width: TASK_BLOCK.WIDTH + 'px'
        }}/>
    );
};