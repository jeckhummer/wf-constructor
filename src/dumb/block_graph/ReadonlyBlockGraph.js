import React from 'react';
import {TASK_GRAPH} from "../../styles";
import {ArrowBlock} from "./ArrowBlock";
import {Grid} from '../common/Grid';
import * as _ from "lodash";
import {ReadonlyTaskBlock} from "./ReadonlyTaskBlock";

export const ReadonlyBlockGraph = ({ matrix }) => {
    return (
        <div style={{ padding: TASK_GRAPH.PADDING }}>
            {
                matrix.map(
                    (row, key) => {
                        const blocks = [
                            _.flatten(row.map(
                                (item, i) =>
                                    [<ReadonlyTaskBlock {...item} />].concat([
                                        i !== row.length - 1
                                        ? <ArrowBlock interceptable={false}/>
                                        : null
                                    ])
                                )
                            )
                        ];

                        return (
                            <div
                                style={{paddingBottom: key === matrix.length -1 ? '0px' : TASK_GRAPH.PADDING}}
                                key={key}>
                            <Grid borderless matrix={blocks}/>
                            </div>
                        );
                    }
                )
            }
        </div>
    );
};