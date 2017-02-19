import React from 'react';
import {Form} from "semantic-ui-react";

export const FreeTextPreviewTemplate = ({label}) => {
    return (
        <Form>
            <Form.TextArea rows={3} label={label}/>
        </Form>
    );
};