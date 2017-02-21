import React from 'react';
import {Form, Icon} from "semantic-ui-react";
import {AddButton} from "../../../buttons/AddButton";

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
                <div
                    className="less-form-field-margin-fix"
                    style={{
                        overflow: 'auto',
                        maxHeight: '195px'
                    }}>
                    {
                        items.length
                            ? items.map(
                                (item, key) => (
                                    <Form.Input
                                        error={!item}
                                        key={key}
                                        size="small"
                                        icon={
                                            <Icon
                                                onClick={() => onItemDelete(key)}
                                                style={{fontSize: '1.3em'}}
                                                name="remove circle"
                                                color="red"
                                                fitted
                                                link/>
                                        }
                                        onChange={(_, {value}) => onItemChange(key, value)}
                                        value={item}/>
                                )
                            )
                            : <span style={{fontSize: '0.9em'}}>
                            No items. Press "ADD ITEM" button below to add new item.
                        </span>
                    }
                </div>
            </Form.Field>

            <AddButton
                content="ADD ITEM"
                size="small"
                floated="right"
                onClick={onItemAdd}/>
        </div>
    );
};