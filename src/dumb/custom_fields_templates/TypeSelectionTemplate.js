import React from 'react';
import {Form} from "semantic-ui-react";

export const TypeSelectionTemplate = ({label, items}) => {
    const options = items.map(item => ({text: item, value: item}));

    return (
        <Form>
            <Form.Select label={label} options={options} placeholder="--"/>
        </Form>
    );
};