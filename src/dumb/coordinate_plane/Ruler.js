import React from 'react';
import {List} from '../common/List';

export const Ruler = ({
    items,
    border,
    vertical
}) => {
    return (
        <List
            vertical={vertical}
            inner
            border={border}
            items={items}
        />
    );
};