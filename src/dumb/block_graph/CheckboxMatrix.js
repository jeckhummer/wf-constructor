import React from 'react';
import {Checkbox} from "semantic-ui-react";
import {CoordinatePlane} from '../coordinate_plane/CoordinatePlane';
import {Grid} from '../common/Grid';

export const CheckboxMatrix = ({
    map,
    onChange,
    contentHeight,
    contentWidth,
    hRulerContent,
    vRulerContent,
    cornerHeight,
    cornerWidth,
}) => {

    const matrix = map.map(
        (row, rowIndex) => row.map(
            (cell, cellIndex) => (
                <div style={{padding: '5px'}}>
                    <Checkbox
                        checked={cell}
                        onChange={() => onChange(rowIndex, cellIndex)}/>
                </div>
            )
        )
    );

    return (
        <CoordinatePlane
            cornerHeight={cornerHeight}
            cornerWidth={cornerWidth}
            cornerContent={null}
            hRulerContent={hRulerContent}
            vRulerContent={vRulerContent}
            contentHeight={contentHeight}
            contentWidth={contentWidth}>
            <Grid
                borderless={true}
                matrix={matrix}
            />
        </CoordinatePlane>
    );
};