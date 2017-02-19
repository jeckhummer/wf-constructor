import {connect} from 'react-redux';
import {ValidationSummary} from "../../dumb/task_editor/ValidationSummary";

function mapStateToProps(state) {
    return {
        content: "NO!",
    };
}

export const CustomFieldEditorAlerts = connect(mapStateToProps)(ValidationSummary);