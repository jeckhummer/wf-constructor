import React from 'react';
import {WORKFLOW_GRID} from "../../styles";
import {EditableArrowBlock} from "./EditableArrowBlock";
import {ReadonlyArrowBlock} from "./ReadonlyArrowBlock";
import {Grid} from '../common/Grid';
import {AddBlockCommandBlock} from "./AddBlockCommandBlock";
import {EditableTaskBlock} from './EditableTaskBlock';
import * as _ from "lodash";

export const EditableBlockGraph = ({
    matrix,
    onRootAddClick
}) => {
    return (
        <div style={{ padding: WORKFLOW_GRID.PADDING }}>
            {
                matrix.map(
                    (row, key) => {
                        const blocks = [
                            _.flatten(row.map(
                                (item, i) =>
                                    [<EditableTaskBlock {...item} />].concat(
                                        i === row.length - 1
                                        ? [
                                            <ReadonlyArrowBlock/>,
                                            <AddBlockCommandBlock onClick={item.onAddAfterCurrentClick}/>
                                        ] : [
                                            <EditableArrowBlock
                                                onClick={item.onAddAfterCurrentClick}
                                                interceptable={true}
                                            />
                                        ]
                                    )
                                )
                            )
                        ];

                        return (
                            <div style={{paddingBottom: WORKFLOW_GRID.PADDING}} key={key}>
                                <Grid borderless matrix={blocks}/>
                            </div>
                        );
                    }
                )
            }
            <AddBlockCommandBlock onClick={onRootAddClick} horizontal/>
        </div>
    );
};