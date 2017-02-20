import {connect} from 'react-redux';
import {selectCustomField, deleteCustomField} from "../../actions/taskEditor";
import {CustomFieldManager} from "../../dumb/editor/custom_field/CustomFieldManager";
import {getTaskEditorState} from "../../selectors/ui";
import {openCustomFieldEditorForEdit} from "../../actions/customFieldEditor";

const mapStateToProps = (state) => {
    const {
        selectedCustomFieldId,
        customFieldsLoading,
        customFields
    } = getTaskEditorState(state);

    return {
        loading: customFieldsLoading,
        customFields,
        selectedCustomField: customFields.find(field => field.id === selectedCustomFieldId)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClick: (id) => dispatch(deleteCustomField(id)),
        onEditClick: (id) => {dispatch(openCustomFieldEditorForEdit(id))},
        onSelect: (fieldId) => dispatch(selectCustomField(fieldId))
    };
};

export const TaskCustomFieldManager = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomFieldManager);