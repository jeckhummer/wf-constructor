import React from 'react';
import {TASK_GRAPH} from "../../styles";
import {ArrowBlock} from "./ArrowBlock";
import {Grid} from '../common/Grid';
import {AddBlockCommandBlock} from "./AddBlockCommandBlock";
import {TaskBlock} from '../block_graph/TaskBlock';
import * as _ from "lodash";

export const BlockGraph = ({
    matrix,
    onPrevClickHandlerFactory,
    onNextClickHandlerFactory,
    onSettingsClickHandlerFactory,
    onDeleteClickHandlerFactory,
}) => {
    return (
        <div style={{ padding: TASK_GRAPH.PADDING }}>
            {
                matrix.map(
                    (row, key) => {
                        const blocks = [
                            _.flatten(row.map(item => [
                                React.createElement(TaskBlock, {
                                    ...item,
                                    onPrevClick: onPrevClickHandlerFactory(item.id),
                                    onNextClick: onNextClickHandlerFactory(item.id),
                                    onSettingsClick: onSettingsClickHandlerFactory(item.id),
                                    onDeleteClick: onDeleteClickHandlerFactory(item.id)
                                }),
                                <ArrowBlock interceptable={true}/>
                            ]))
                            .slice(0, -1)
                            .concat([<ArrowBlock/>, <AddBlockCommandBlock/>])
                        ];

                        return (
                            <div style={{paddingBottom: TASK_GRAPH.PADDING}} key={key}>
                                <Grid borderless matrix={blocks}/>
                            </div>
                        );
                    }
                )
            }
            <AddBlockCommandBlock horizontal/>
        </div>
    );
};