import React from 'react';
import {Grid} from '../dumb/common/Grid';
import {WORKFLOW_GRID} from "../styles";

export const WorkflowGrid = ({matrix}) => {
    return (
        <Grid
            matrix={matrix}
            inner={true}
            border={WORKFLOW_GRID.BORDER}
        />
    );
};