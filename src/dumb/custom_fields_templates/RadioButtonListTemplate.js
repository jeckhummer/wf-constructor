import React from 'react';
import {Form} from "semantic-ui-react";

export const RadioButtonListTemplate = ({label, items}) => {
    return (
        <Form>
            <Form.Field>
                <label>{label}</label>
            </Form.Field>
            {
                items.map((item, key) =>
                    <Form.Radio
                        label={item}
                        value={item}
                        key={key}
                    />
                )
            }
        </Form>
    );
};