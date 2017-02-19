import React from 'react';
import {COLORS} from "../../styles";

export const ReadonlyRulerItem = ({
    content,
    height,
    width,
}) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: height,
            width: width,
            backgroundColor: COLORS.PRIMARY_LIGHT,
            color: COLORS.PRIMARY,
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }}>
            <div style={{
                width: width,
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                textAlign: 'center',
                overflow: 'hidden'
            }}>
                {content}
            </div>
        </div>
    );
};