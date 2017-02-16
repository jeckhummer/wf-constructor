import {connect} from 'react-redux';
import {selectCustomField} from "../../actions/ui";
import {CustomFieldsManager} from "../../dumb/editor/CustomFieldsManager";
import {getTaskEditorState} from "../../selectors/ui";

const mapStateToProps = (state) => {
    const {
        selectedCustomField,
        customFieldsLoading,
        customFields
    } = getTaskEditorState(state);

    return {
        loading: customFieldsLoading,
        fields: customFields,
        selectedCustomField
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddClick: () => {},
        onDeleteClick: () => {},
        onEditClick: () => {},
        onSelect: (field) => dispatch(selectCustomField(field))
    };
};

export const TaskCustomFieldsManager = connect(
    mapStateToProps,
    mapDispatchToProps
)(CustomFieldsManager);