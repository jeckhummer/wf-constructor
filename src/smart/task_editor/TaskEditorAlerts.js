import {connect} from 'react-redux';
import {ValidationSummary} from "../../dumb/task_editor/ValidationSummary";
import {getTaskEditorTaskValidationResult} from "../../selectors/ui";

function mapStateToProps(state) {
    const {
        isNameValid,
        isPhaseValid,
        isTeamValid,
    } = getTaskEditorTaskValidationResult(state);

    const errorMessage = `
        ${!isNameValid ? 'Name shouldn\'t be empty. ' : ''}
        ${[
            !isPhaseValid ? 'Phase' : null,
            !isTeamValid ? 'Team' : null,
        ].filter(x => x != null)
         .join(' and ')} 
        ${!isPhaseValid || !isTeamValid ? 'should be selected.' : ''}
    `;

    return {
        content: errorMessage,
    };
}

export const TaskEditorAlerts = connect(mapStateToProps)(ValidationSummary);