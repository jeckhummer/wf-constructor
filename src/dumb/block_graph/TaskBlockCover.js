import React from 'react';
import {TASK_BLOCK} from '../../styles';
import {Icon} from "semantic-ui-react";
import {Space} from "../common/Space";

export const TaskBlockCover = ({
    first,
    last,
    onPrevClick,
    onNextClick,
    onSettingsClick,
    onDeleteClick
}) => {
    return (
        <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px',
            ...TASK_BLOCK.COVER
        }}>
            <div>
                <Icon
                    name="chevron left"
                    disabled={first}
                    size="large"
                    link={!first}
                    fitted
                    onClick={onPrevClick}/>
            </div>

            <div style={{
                flexGrow: 1,
                textAlign: 'center'
            }}>
                <Icon
                    name="setting"
                    size="large"
                    link
                    fitted
                    onClick={onSettingsClick}/>
                <Space x={4}/>
                <Icon
                    name="remove circle"
                    size="large"
                    link
                    fitted
                    onClick={onDeleteClick}/>
            </div>

            <div>
                <Icon
                    name="chevron right"
                    disabled={last}
                    size="large"
                    link={!last}
                    fitted
                    onClick={onNextClick}/>
            </div>
        </div>
    );
};