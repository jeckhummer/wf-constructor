import React from 'react';

export const ScrollScope = ({width, height, hScroll, vScroll, onScroll, children}) => {
    return (
        <div
            onScroll={onScroll}
            style={{
                width,
                height,
                overflowX: hScroll ? 'scroll' : 'hidden',
                overflowY: vScroll ? 'scroll' : 'hidden'
            }}>
            {children}
        </div>
    );
};