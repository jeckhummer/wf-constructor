import React from 'react';
import {Form} from "semantic-ui-react";

export const TypeSelectionPreviewTemplate = ({label, items}) => {
    const options = items.map((item, key) => ({
        text: item || "[NO TEXT PROVIDED]",
        value: key + "_" + item,
    }));

    return (
        <Form>
            <Form.Select
                label={label || "[NO TEXT PROVIDED]"}
                options={options}
                placeholder="--"
            />
        </Form>
    );
};