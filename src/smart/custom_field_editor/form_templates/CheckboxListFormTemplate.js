import React from 'react';
import {GenericListFormTemplate} from "./generic/GenericListFormTemplate";

export const CheckboxListFormTemplate = ({label, items, onCustomFieldChange}) => {
    const onDataChange = dataDiff => onCustomFieldChange({
        data: {
            ...items,
            ...dataDiff
        }
    });
    const onLabelChange = label => onDataChange({label});
    const onItemChange = (index, value) => onDataChange({
        items: items.map((item, i) =>
            i === index ? value : item
        )
    });
    const onItemDelete = index => onDataChange({
        items: items.filter((item, i) => i !== index)
    });
    const onItemAdd = () => onDataChange({
        items: items.concat([''])
    });

    return (
        <GenericListFormTemplate
            {...{
                label,
                items,
                onLabelChange,
                onItemAdd,
                onItemDelete,
                onItemChange
            }}
        />
    );
};