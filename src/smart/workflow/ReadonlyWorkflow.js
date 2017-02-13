import React from 'react';
import {connect} from 'react-redux';
import {getWorkflowMatrix} from "../../selectors/workflow";
import {ReadonlyWorkflowBlock} from "./ReadonlyWorkflowBlock";
import {WorkflowGrid} from "../../dumb/WorkflowGrid";

const mapStateToProps = (state) => {
    const matrix = getWorkflowMatrix(state)
        .map((row, teamIndex) =>
            row.map((items, phaseIndex) => <ReadonlyWorkflowBlock items={items}/>)
        );

    return {matrix};
};

export const ReadonlyWorkflow = connect(mapStateToProps)(WorkflowGrid);