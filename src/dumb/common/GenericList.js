import React from 'react';
import {Clear} from "./Clear";

export const GenericList = ({
    items,
    vertical,
    border,
    borderPredicate,
}) => {
    return (
        <div style={{
            display: 'flex',
            height: '100%',
            flexDirection: vertical ? 'column' : 'row',
            alignItems: 'stretch',
        }}>
            {
                items.map((item, itemIndex) => {
                    const visibilityMap = vertical
                        ? borderPredicate(itemIndex, 0, items.length - 1, 0)
                        : borderPredicate(0, itemIndex, 0, items.length - 1);

                    const width = (border && border.width) || '1px';
                    const style = (border && border.style) || 'solid';
                    const color = (border && border.color) || 'black';

                    return (
                        <div
                            style={{
                                border: `${width}px ${style} ${color}`,
                                borderTopWidth: visibilityMap && visibilityMap.top ? `${width}px` : '0px',
                                borderBottomWidth: visibilityMap && visibilityMap.bottom ? `${width}px` : '0px',
                                borderLeftWidth: visibilityMap && visibilityMap.left ? `${width}px` : '0px',
                                borderRightWidth: visibilityMap && visibilityMap.right ? `${width}px` : '0px'
                            }}
                            key={itemIndex}>
                            {item}
                        </div>
                    );
                })
            }
            <Clear/>
        </div>
    );
};