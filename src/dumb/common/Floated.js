import React from 'react';

export const Floated = ({right, children, style}) => {
    const direction = right !== undefined ? 'right' : 'left';

    return (
        <div style={{float: direction, ...style}}>
            {children}
        </div>
    );
};