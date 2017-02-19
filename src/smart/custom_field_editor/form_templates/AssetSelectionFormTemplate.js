import {GenericTextFormTemplate} from "../../../dumb/custom_field_editor/form_templates/GenericTextFormTemplate";
import {updateActiveCustomField} from "../../../actions/customFieldEditor";
import {connect} from "react-redux";

const mapStateToProps = (state, {label}) => {
    return {label};
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateActiveCustomField: diff => dispatch(updateActiveCustomField(diff))
    };
};

export const mergeProps = (stateProps, dispatchProps) => {
    return {
        onLabelChange: label => dispatchProps.updateActiveCustomField({
            data: {label}
        }),
        ...stateProps
    };
};

export const AssetSelectionFormTemplate = connect(
    mapStateToProps, 
    mapDispatchToProps,
    mergeProps
)(GenericTextFormTemplate);