import {connect} from 'react-redux';
import {selectCustomField, deleteCustomField} from "../../actions/taskEditor";
import {CustomFieldManager} from "../../dumb/task_editor/CustomFieldManager";
import {getTaskEditorState} from "../../selectors/ui";
import {openCustomFieldEditorForEdit} from "../../actions/customFieldEditor";

const mapStateToProps = (state) => {
    const {
        selectedCustomField,
        customFieldsLoading,
        customFields
    } = getTaskEditorState(state);

    return {
        loading: customFieldsLoading,
        customFields,
        selectedCustomField
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClick: (id) => dispatch(deleteCustomField(id)),
        onEditClick: (id) => {dispatch(openCustomFieldEditorForEdit(id))},
        onSelect: (field) => dispatch(selectCustomField(field))
    };
};

export const TaskCustomFieldManager = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomFieldManager);