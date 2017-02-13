import React from 'react';
import {connect} from 'react-redux';
import {getSortedPhasesIds} from "../../selectors/phases";
import {WorkflowGrid} from "../../dumb/WorkflowGrid";
import {openTaskEditorForAdding} from '../../actions/ui';
import {AddBlockCommandBlock} from "../../dumb/block_graph/AddBlockCommandBlock";
import {WORKFLOW_GRID} from "../../styles";

const mapStateToProps = (state) => {
    return {
        phases: getSortedPhasesIds(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: task => dispatch(openTaskEditorForAdding(task))
    };
};

const mergeProps = (stateProps, dispatchProps) => {
    const matrix = [
        stateProps.phases.map(phaseId =>
            <div style={{padding: WORKFLOW_GRID.PADDING + 'px'}}>
                <AddBlockCommandBlock onClick={() => dispatchProps.onClick({phaseId})}/>
            </div>
        )
    ];

    return {matrix};
};

export const NoTasksWorkflow = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(WorkflowGrid);