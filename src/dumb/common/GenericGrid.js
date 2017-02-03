import React from 'react';
import {GenericList} from "./GenericList";

export const GenericGrid = ({
    matrix,
    border,
    borderPredicate
}) => {
    const rows = matrix.length;

    // if single row then horizontal list
    if (matrix.length === 1) {
        return (
            <GenericList
                items={matrix[0]}
                border={border}
                borderPredicate={borderPredicate}
            />
        )
    }

    // if single column then vertical list
    if (matrix.every(row => row.length === 1)) {
        return (
            <GenericList
                items={matrix.map(row => row[0])}
                border={border}
                borderPredicate={borderPredicate}
            />
        )
    }

    return (
        <div>
            <table>
                <tbody>
                {
                    matrix.map((row, rowIndex) => {
                        const cells = row.length;

                        return (
                            <tr key={rowIndex}>
                                {
                                    row.map((cell, cellIndex) => {
                                        const visibilityMap = borderPredicate(rowIndex, cellIndex, rows - 1, cells - 1);

                                        const width = (border && border.width) || '1px';
                                        const style = (border && border.style) || 'solid';
                                        const color = (border && border.color) || 'black';

                                        return (
                                            <td style={{
                                                verticalAlign: 'top',
                                                border: `${width}px ${style} ${color}`,
                                                borderTopWidth: visibilityMap && visibilityMap.top ? `${width}px` : '0px',
                                                borderBottomWidth: visibilityMap && visibilityMap.bottom ? `${width}px` : '0px',
                                                borderLeftWidth: visibilityMap && visibilityMap.left ? `${width}px` : '0px',
                                                borderRightWidth: visibilityMap && visibilityMap.right ? `${width}px` : '0px'
                                            }}
                                                key={cellIndex}>
                                                {cell}
                                            </td>
                                        );
                                    })
                                }
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        </div>
    );
};