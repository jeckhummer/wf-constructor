import React from 'react';
import {Form} from "semantic-ui-react";

export const TextStringTemplate = ({label}) => {
    return (
        <Form>
            <Form.Input label={label}/>
        </Form>
    );
};