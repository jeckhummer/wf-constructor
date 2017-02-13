import React from 'react';

export const Uppercase = ({children}) => {
    return (
        <span style={{textTransform: 'uppercase'}}>
            {children}
        </span>
    );
};