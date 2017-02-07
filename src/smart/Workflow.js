import React from 'react';
import {connect} from 'react-redux';
import {getWorkflow} from "../selectors/workflow";
import {TASK_GRAPH} from '../styles';
import {EditableWorkflowBlock} from "./EditableWorkflowBlock";
import {ReadonlyWorkflowBlock} from "./ReadonlyWorkflowBlock";
import {Grid} from '../dumb/common/Grid';
import {getSortedPhases} from "../selectors/phases";
import {getSortedTeams} from "../selectors/teams";
import {getEditMode} from "../selectors/ui";

const mapStateToProps = (state) => {
    const sortedPhases = getSortedPhases(state);
    const sortedTeams = getSortedTeams(state);
    const editMode = getEditMode(state);

    const matrix = getWorkflow(state)
        .map((row, teamIndex) =>
            row.map((items, phaseIndex) =>
                editMode
                ? <EditableWorkflowBlock
                    items={items}
                    phaseId={sortedPhases[phaseIndex].id}
                    teamId={sortedTeams[teamIndex].id}
                />
                : <ReadonlyWorkflowBlock items={items}/>
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