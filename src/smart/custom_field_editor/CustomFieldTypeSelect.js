import {Dropdown} from "semantic-ui-react";
import {connect} from "react-redux";
import {CUSTOM_FIELD_TYPES} from "../../constants";
import {getCustomFieldEditorActiveCustomField} from "../../selectors/ui";

const mapStateToProps = (state) => {
    const field = getCustomFieldEditorActiveCustomField(state);
    const options = Object.values(CUSTOM_FIELD_TYPES)
        .map(type => ({
            text: type.name,
            value: type.id
        }));
    const value = field.typeId;

    return {
        options,
        value,
        selection: true
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (_, {value}) => console.log(value)
    };
};

export const CustomFieldTypeSelect = connect(
    mapStateToProps,
    mapDispatchToProps
)(Dropdown);