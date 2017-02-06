import React from 'react';
import {connect} from 'react-redux';
import {getWorkflow} from "../selectors/workflow";
import {TASK_GRAPH} from '../styles';
import {WorkflowBlock} from "./WorkflowBlock";
import {Grid} from '../dumb/common/Grid';

const mapStateToProps = (state) => {
    const matrix = getWorkflow(state)
        .map(row =>
            row.map(items =>
                <WorkflowBlock items={items}/>
            )
        );

    return {
        matrix,
        inner: true,
        border: TASK_GRAPH.BORDER
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const Workflow = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);