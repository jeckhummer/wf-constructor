import React from 'react';
import {Table, Icon} from "semantic-ui-react";
import {CUSTOM_FIELD_TYPES} from "../../constants";

export const CustomFieldList = ({
    customFields,
    onDeleteClick,
    onEditClick,
    onSelect
}) => {
    return (
        <Table basic='very' selectable>
            <Table.Body>
                {
                    customFields.map((field, key) =>
                        <Table.Row
                            style={{cursor: 'pointer'}}
                            key={key}
                            onClick={() => onSelect(field)}>

                            <Table.Cell>{field.data.label}</Table.Cell>
                            <Table.Cell>{CUSTOM_FIELD_TYPES[field.typeId].name}</Table.Cell>
                            <Table.Cell>
                                <Icon
                                    onClick={(e) => {
                                        onEditClick(field.id);
                                        e.stopPropagation();
                                    }}
                                    name="pencil"
                                    color="blue"
                                    link/>
                                <Icon
                                    onClick={(e) => {
                                        onDeleteClick(key);
                                        e.stopPropagation();
                                    }}
                                    name="remove circle"
                                    color="red"
                                    fitted
                                    link/>
                            </Table.Cell>
                        </Table.Row>
                    )
                }
            </Table.Body>
        </Table>
    );
};