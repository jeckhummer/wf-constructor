import React from 'react';
import {GenericListFormTemplate} from "./GenericListFormTemplate";

export const CheckboxListFormTemplate = ({update, label, items}) => {
    const props = {
        onLabelChange: label => update({label}),
        onItemChange: (index, value) => update({
            items: items.map((item, i) =>
                i === index ? value : item
            )
        }),
        onItemDelete: index => update({
            items: items.filter((item, i) => i !== index)
        }),
        onItemAdd: () => update({
            items: items.concat([''])
        }),
        label,
        items
    };

    return (
        <GenericListFormTemplate {...props}/>
    );
};