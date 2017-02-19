import {connect} from 'react-redux';
import {selectCustomField, deleteCustomField} from "../../actions/taskEditor";
import {CustomFieldManager} from "../../dumb/editor/CustomFieldManager";
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
        onDeleteClick: (order) => dispatch(deleteCustomField(order)),
        onEditClick: (order) => {dispatch(openCustomFieldEditorForEdit(order))},
        onSelect: (field) => dispatch(selectCustomField(field))
    };
};

export const TaskCustomFieldManager = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomFieldManager);