import {connect} from 'react-redux';
import {ValidationSummary} from "../../dumb/editor/ValidationSummary";

function mapStateToProps(state) {
    return {
        content: "NO!",
    };
}

export const CustomFieldEditorAlerts = connect(mapStateToProps)(ValidationSummary);