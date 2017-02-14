import React from 'react';
import {WORKFLOW_GRID} from "../../styles";
import {ArrowBlock} from "./ArrowBlock";
import {Grid} from '../common/Grid';
import * as _ from "lodash";
import {ReadonlyTaskBlock} from "./ReadonlyTaskBlock";
import {EmptyBlockStub} from "./EmptyBlockStub";

export const ReadonlyBlockGraph = ({ matrix }) => {
    let content;

    if (matrix.length > 0) {
        content = matrix.map(
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
                        style={{paddingBottom: key === matrix.length -1 ? '0px' : WORKFLOW_GRID.PADDING}}
                        key={key}>
                        <Grid borderless matrix={blocks}/>
                    </div>
                );
            }
        );
    } else {
        content = <EmptyBlockStub/>;
    }

    return (
        <div style={{ padding: WORKFLOW_GRID.PADDING }}>
            {content}
        </div>
    );
};