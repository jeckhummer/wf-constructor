import React from 'react';
import {Form, Icon} from "semantic-ui-react";
import {AddButton} from "../../buttons/AddButton";

export const GenericListFormTemplate = ({
    label,
    items,
    onLabelChange,
    onItemChange,
    onItemDelete,
    onItemAdd
}) => {
    return (
        <div>
            <Form.Field>
                <Form.Input
                    label="Label"
                    value={label}
                    onChange={(_, {value}) => onLabelChange(value)}
                    placeholder="Label"/>
            </Form.Field>

            <Form.Field>
                <label>Items</label>
                {
                    items.map(
                        (item, key) => (
                            <Form.Input
                                error={!item}
                                key={key}
                                icon={
                                    <Icon
                                        onClick={() => onItemDelete(key)}
                                        name="remove circle"
                                        color="red"
                                        fitted
                                        link/>
                                }
                                onChange={(_, {value}) => onItemChange(key, value)}
                                value={item}/>
                        )
                    )
                }
            </Form.Field>

            <AddButton
                content="ADD ITEM"
                size="small"
                floated="right"
                onClick={onItemAdd}/>
        </div>
    );
};