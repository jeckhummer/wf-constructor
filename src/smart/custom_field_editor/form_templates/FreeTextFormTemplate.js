import React from 'react';
import {GenericTextFormTemplate} from "./generic/GenericTextFormTemplate";

export const FreeTextFormTemplate = ({label, onDataChange}) => {
    const onLabelChange = label => onDataChange({
        data: {label}
    });

    return (
        <GenericTextFormTemplate
            {...{
                label,
                onLabelChange,
            }}
        />
    );
};