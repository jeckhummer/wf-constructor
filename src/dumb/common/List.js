import React from 'react';
import {GenericList} from "./GenericList";

export const List = ({
    items,
    vertical,
    outter,
    inner,
    borderless,
    border
}) => {
    let borderPredicate;

    if (outter) {
        borderPredicate = (i, j, maxi, maxj) => ({
            top: i === 0,
            bottom: i === maxi,
            left: j === 0,
            right: j === maxj,
        });
    } else if (inner) {
        borderPredicate = (i, j, maxi, maxj) => ({
            top: i !== 0,
            bottom: false,
            left: j !== 0,
            right: false,
        });
    } else if (borderless) {
        borderPredicate = (i, j, maxi, maxj) => ({
            top: false,
            bottom: false,
            left: false,
            right: false,
        });
    } else {
        borderPredicate = (i, j, maxi, maxj) => ({
            top: true,
            bottom: i === maxi,
            left: true,
            right: j === maxj,
        });
    }

    return (
        <GenericList
            items={items}
            vertical={vertical}
            border={border}
            borderPredicate={borderPredicate}
        />
    );
};