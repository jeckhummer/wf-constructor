import React from 'react';
import {GenericTextFormTemplate} from "./GenericTextFormTemplate";

export const FreeTextFormTemplate = ({label, update}) => {
    const props = {
        onLabelChange: label => update({label}),
        label
    };

    return (
        <GenericTextFormTemplate {...props}/>
    );
};