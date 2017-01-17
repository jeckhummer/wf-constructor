import React from 'react';

export const Floated = ({right, children, clear, style}) => {
    const direction = right !== undefined ? 'right' : 'left';
    const clearDiv = clear ? (<div style={{clear: 'both'}}/>) : null;

    return (
        <div>
            <div style={{float: direction}}>
                {children}
            </div>
            {clearDiv}
        </div>
    );
};