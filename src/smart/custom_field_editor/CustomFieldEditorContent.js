import {connect} from 'react-redux';
import {getCustomFieldEditorActiveCustomField} from "../../selectors/ui";
import {CustomFieldForm} from "../../dumb/editor/custom_field/CustomFieldForm";
import {updateActiveCustomFieldType, updateActiveCustomFieldData} from "../../actions/customFieldEditor";

const mapStateToProps = (state) => {
    const customField = getCustomFieldEditorActiveCustomField(state);

    return {customField};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTypeChange: (typeId) => dispatch(updateActiveCustomFieldType(typeId)),
        onDataChange: (diff) => dispatch(updateActiveCustomFieldData(diff))
    };
};

export const CustomFieldEditorContent = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomFieldForm);