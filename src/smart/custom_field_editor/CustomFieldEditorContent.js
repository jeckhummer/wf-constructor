import {connect} from 'react-redux';
import {getCustomFieldEditorActiveCustomField} from "../../selectors/ui";
import {CustomFieldForm} from "../../dumb/custom_field_editor/CustomFieldForm";
import {updateActiveCustomField} from "../../actions/customFieldEditor";

const mapStateToProps = (state) => {
    const customField = getCustomFieldEditorActiveCustomField(state);

    return {customField};
};

const mapDispatchToProps = (dispatch) => {
    return {onCustomFieldChange: (data) => dispatch(updateActiveCustomField(data))};
};

export const CustomFieldEditorContent = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomFieldForm);