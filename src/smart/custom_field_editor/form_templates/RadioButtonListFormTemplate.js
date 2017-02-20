import {updateActiveCustomFieldData} from "../../../actions/customFieldEditor";
import {connect} from "react-redux";
import {GenericListFormTemplate} from "../../../dumb/editor/custom_field/form_templates/GenericListFormTemplate";

const mapStateToProps = (state, {label, items}) => {
    return {label, items};
};

const mapDispatchToProps = (dispatch) => {
    return {
        update: diff => dispatch(updateActiveCustomFieldData(diff))
    };
};

export const mergeProps = (stateProps, dispatchProps) => {
    return {
        onLabelChange: label => dispatchProps.update({label}),
        onItemChange: (index, value) => dispatchProps.update({
            items: stateProps.items.map((item, i) =>
                i === index ? value : item
            )
        }),
        onItemDelete: index => dispatchProps.update({
            items: stateProps.items.filter((item, i) => i !== index)
        }),
        onItemAdd: () => dispatchProps.update({
            items: stateProps.items.concat([''])
        }),
        ...stateProps
    };
};

export const RadioButtonListFormTemplate = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(GenericListFormTemplate);