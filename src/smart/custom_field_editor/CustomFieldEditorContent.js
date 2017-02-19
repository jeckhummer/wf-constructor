import React from 'react';
import {connect} from 'react-redux';
import {getCustomFieldEditorActiveCustomField} from "../../selectors/ui";
import {CustomFieldForm} from "../../dumb/editor/CustomFieldForm";

const mapStateToProps = (state) => {
    const customField = getCustomFieldEditorActiveCustomField(state);

    return {
        customField
    };
};

const component = ({customField}) => {
    return (
        <CustomFieldForm customField={customField}/>
    );
};

export const CustomFieldEditorContent = connect(mapStateToProps)(component);