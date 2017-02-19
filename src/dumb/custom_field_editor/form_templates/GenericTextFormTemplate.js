import React from 'react';
import {Form} from "semantic-ui-react";

export const GenericTextFormTemplate = ({
    label,
    onLabelChange,
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
        </div>
    );
};