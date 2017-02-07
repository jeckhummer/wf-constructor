import React from 'react';
import {TASK_GRAPH} from "../../styles";
import {ArrowBlock} from "./ArrowBlock";
import {Grid} from '../common/Grid';
import {AddBlockCommandBlock} from "./AddBlockCommandBlock";
import {TaskBlock} from '../block_graph/TaskBlock';
import * as _ from "lodash";

export const BlockGraph = ({
    matrix,
    editMode,
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
                                    [<TaskBlock {...item} />].concat(
                                        i === row.length - 1
                                            ? editMode
                                                ? [
                                                    <ArrowBlock/>,
                                                    <AddBlockCommandBlock onClick={item.onAddAfterCurrentClick}/>
                                                ] : null
                                            : [
                                                <ArrowBlock
                                                    onClick={item.onAddAfterCurrentClick}
                                                    interceptable={editMode}
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
            {editMode ? <AddBlockCommandBlock onClick={onRootAddClick} horizontal/> : null}
        </div>
    );
};