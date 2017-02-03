import React from 'react';

export const ScrollSync = ({left, top, onScroll, children}) => {
    return (
        <div
            onScroll={onScroll}
            style={{
                height: '100%',
                position: 'relative',
                left: `-${left || 0}px`,
                top: `-${top || 0}px`
            }}>
        {children}
        </div>
    );
};