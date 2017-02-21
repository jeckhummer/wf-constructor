import React from 'react';
import {Form} from "semantic-ui-react";

export const CheckboxListPreviewTemplate = ({label, items}) => {
    return (
        <Form>
            <Form.Field>
                <label>{label || "[NO TEXT PROVIDED]"}</label>
            </Form.Field>
            {
                items.map((item, key) =>
                    <Form.Checkbox
                        label={item || "[NO TEXT PROVIDED]"}
                        value={item}
                        key={key}
                    />
                )
            }
        </Form>
    );
};