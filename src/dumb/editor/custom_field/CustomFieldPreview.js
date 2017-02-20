import React from 'react';
import {Divider} from "semantic-ui-react";
import {CUSTOM_FIELD_TYPES} from "../../../constants";

export const CustomFieldPreview = ({
    selectedCustomField,
    placeholder
}) => {
    return (
        <div>
            Preview
            <Divider />
            {
                selectedCustomField != null && CUSTOM_FIELD_TYPES[selectedCustomField.typeId] !== undefined
                    ? React.createElement(
                        CUSTOM_FIELD_TYPES[selectedCustomField.typeId].previewTemplate,
                        selectedCustomField.data
                    )
                    : <div>
                        {placeholder}
                    </div>
            }
        </div>
    );
};