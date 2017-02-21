import {GenericTextFormTemplate} from "../../../dumb/editor/custom_field/form_templates/GenericTextFormTemplate";
import {updateActiveCustomFieldData} from "../../../actions/customFieldEditor";
import {connect} from "react-redux";

const mapStateToProps = (state, {label}) => {
    return {label};
};

const mapDispatchToProps = (dispatch) => {
    return {
        update: diff => dispatch(updateActiveCustomFieldData(diff))
    };
};

export const mergeProps = (stateProps, dispatchProps) => {
    return {
        onLabelChange: label => dispatchProps.update({label}),
        ...stateProps
    };
};

export const TextStringFormTemplate = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(GenericTextFormTemplate);