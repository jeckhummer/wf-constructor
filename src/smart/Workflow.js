import React from 'react';
import {connect} from 'react-redux';
import {getWorkflow} from "../selectors";
import {Grid} from '../dumb/common/Grid';
import {BlockScenario} from "../dumb/block_graph/BlockScenario";
import {TASK_SCENARIO} from '../styles';
import {WOTBlock} from "./WOTBlock";

const mapStateToProps = (state) => {
    const matrix = getWorkflow(state)
        .map(row =>
            row.map(sequences => {
                const blockSequences = sequences
                    .map(row =>
                        row.map(taskId => <WOTBlock id={taskId}/>)
                    );
                return (<BlockScenario blockSequences={blockSequences}/>);
            })
        );

    return {
        matrix,
        inner: true,
        border: TASK_SCENARIO.BORDER
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const Workflow = connect(
    mapStateToProps,
    mapDispatchToProps
)(Grid);