import React from 'react';
import {connect} from 'react-redux';
import {getWorkflowMatrix} from "../../selectors/workflow";
import {EditableWorkflowBlock} from "./EditableWorkflowBlock";
import {getSortedPhasesIds} from "../../selectors/phases";
import {getWorkflowTeamIds} from "../../selectors/teams";
import {WorkflowGrid} from "../../dumb/WorkflowGrid";

const mapStateToProps = (state) => {
    const sortedPhaseIds = getSortedPhasesIds(state);
    const sortedTeamIds = getWorkflowTeamIds(state);
    const workflow = getWorkflowMatrix(state);

    const matrix = workflow.map((row, teamIndex) =>
        row.map((items, phaseIndex) =>
            <EditableWorkflowBlock
                items={items}
                phaseId={sortedPhaseIds[phaseIndex]}
                teamId={sortedTeamIds[teamIndex]}
            />
        )
    );

    return {matrix};
};

export const EditableWorkflow = connect(mapStateToProps)(WorkflowGrid);