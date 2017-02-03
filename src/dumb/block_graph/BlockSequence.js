import React from 'react';
import {Grid} from '../common/Grid';
import {ArrowBlock} from "./ArrowBlock";
import * as _ from "lodash";
import {AddBlockCommandBlock} from "./AddBlockCommandBlock";

export const BlockSequence = ({ blocks }) => {
    const matrix = [
        _.flatten(blocks.map(block => [block, <ArrowBlock interceptable={true}/>]))
        .slice(0, -1)
        .concat([<ArrowBlock/>, <AddBlockCommandBlock/>])
    ];

    return (
        <div>
            <Grid borderless matrix={matrix}/>
        </div>
    );
};