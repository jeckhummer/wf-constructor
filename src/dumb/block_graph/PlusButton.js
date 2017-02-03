import React from 'react';
import {Icon} from "semantic-ui-react";
import {COLORS} from '../../styles';

export const PlusButton = ({onClick, size}) => {
    return(
        <div style={{
            textAlign: 'center',
            fontSize: '1.3em',
            color: COLORS.PRIMARY
        }}>
            {
                size !== undefined ? (
                    <Icon
                        onClick={onClick}
                        name="plus circle"
                        size={size}
                        link
                        fitted
                    />
                ) : (
                    <Icon
                        onClick={onClick}
                        name="plus circle"
                        link
                        fitted
                    />
                )
            }
        </div>
    );
};