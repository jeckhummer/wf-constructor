import React from 'react';
import {TASK_GRAPH} from "../../styles";
import {ArrowBlock} from "./ArrowBlock";
import {Grid} from '../common/Grid';
import {AddBlockCommandBlock} from "./AddBlockCommandBlock";
import {EditableTaskBlock} from './EditableTaskBlock';
import * as _ from "lodash";

export const EditableBlockGraph = ({
    matrix,
    onRootAddClick
}) => {
    return (
        <div style={{ padding: TASK_GRAPH.PADDING }}>
            {
                matrix.map(
                    (row, key) => {
                        const blocks = [
                            _.flatten(row.map(
                                (item, i) =>
                                    [<EditableTaskBlock {...item} />].concat(
                                        i === row.length - 1
                                        ? [
                                            <ArrowBlock/>,
                                            <AddBlockCommandBlock onClick={item.onAddAfterCurrentClick}/>
                                        ] : [
                                            <ArrowBlock
                                                onClick={item.onAddAfterCurrentClick}
                                                interceptable={true}
                                            />
                                        ]
                                    )
                                )
                            )
                        ];

                        return (
                            <div style={{paddingBottom: TASK_GRAPH.PADDING}} key={key}>
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