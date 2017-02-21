import React from 'react';
import {Divider} from "semantic-ui-react";
import {CUSTOM_FIELD_TYPES} from "../../../constants";

export const CustomFieldPreview = ({selectedCustomField, placeholder}) => {
    return (
        <div>
            Preview
            <Divider />
            {
                selectedCustomField && CUSTOM_FIELD_TYPES[selectedCustomField.typeId]
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