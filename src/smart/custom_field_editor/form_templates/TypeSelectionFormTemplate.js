import {updateActiveCustomField} from "../../../actions/customFieldEditor";
import {connect} from "react-redux";
import {GenericListFormTemplate} from "../../../dumb/custom_field_editor/form_templates/GenericListFormTemplate";

const mapStateToProps = (state, {label, items}) => {
    return {label, items};
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateActiveCustomField: diff => dispatch(updateActiveCustomField(diff))
    };
};

export const mergeProps = (stateProps, dispatchProps) => {
    return {
        onLabelChange: label => dispatchProps.updateActiveCustomField({
            data: {
                ...stateProps,
                label
            }
        }),
        onItemChange: (index, value) => dispatchProps.updateActiveCustomField({
            data: {
                ...stateProps,
                items: stateProps.items.map((item, i) =>
                    i === index ? value : item
                )
            }
        }),
        onItemDelete: index => dispatchProps.updateActiveCustomField({
            data: {
                ...stateProps,
                items: stateProps.items.filter((item, i) => i !== index)
            }
        }),
        onItemAdd: () => dispatchProps.updateActiveCustomField({
            data: {
                ...stateProps,
                items: stateProps.items.concat([''])
            }
        }),
        ...stateProps
    };
};

export const TypeSelectionFormTemplate = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(GenericListFormTemplate);