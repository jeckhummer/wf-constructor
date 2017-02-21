import React from 'react';
import {Form} from "semantic-ui-react";

export const TextStringPreviewTemplate = ({label}) => {
    return (
        <Form>
            <Form.Input label={label || "[NO TEXT PROVIDED]"}/>
        </Form>
    );
};