import React from 'react';
import {Dropdown} from "semantic-ui-react";
import {CUSTOM_FIELD_TYPES} from "../../../constants";

export const CustomFieldTypeSelect = ({
    selectedTypeId,
    onChange
}) => {
    const options = Object.values(CUSTOM_FIELD_TYPES)
        .map(type => ({
            text: type.name,
            value: type.id
        }));

    return (
        <Dropdown
            options={options}
            value={selectedTypeId}
            onChange={(_, {value}) => onChange(value)}
            selection={true}
        />
    );
};