import React from 'react';
import {GenericGrid} from './GenericGrid';
import * as _ from "lodash";

export const Grid = ({
    matrix,
    border,
    outter,
    inner,
    borderless
}) => {
    const rows = matrix.length;
    const cells = _.max(matrix.map(row => row.length));

    let _matrix = _.range(0, rows)
        .map((row, rowIndex) => _.range(0, cells)
            .map((cell, cellIndex) => matrix[rowIndex][cellIndex])
        );

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
        <GenericGrid
            matrix={_matrix}
            border={border}
            borderPredicate={borderPredicate}
        />
    );
};