import React from 'react';
import {Divider} from "semantic-ui-react";
import {CUSTOM_FIELD_TYPES} from "../../constants";

export const CustomFieldPreview = ({
    selectedCustomField,
}) => {
    return (
        <div>
            Preview
            <Divider />
            {
                selectedCustomField == null
                    ? <div>
                        Select field to see preview.
                    </div>
                    : React.createElement(
                        CUSTOM_FIELD_TYPES[selectedCustomField.typeId].previewTemplate,
                        selectedCustomField.data
                    )
            }
        </div>
    );
};