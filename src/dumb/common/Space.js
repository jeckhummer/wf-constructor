import React from 'react';
import * as _ from 'lodash';

export const Space = ({x}) => {
    return (
        <span>
            {_.range(x).map((i,j) => <span key={j}>&nbsp;</span>)}
        </span>
    );
};