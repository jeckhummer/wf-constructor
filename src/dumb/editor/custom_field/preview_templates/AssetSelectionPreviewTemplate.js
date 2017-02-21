import React from 'react';
import {Form} from "semantic-ui-react";

export const AssetSelectionPreviewTemplate = ({label}) => {
    const options = [
        {text: 'asset 1', value: 'asset 1'},
        {text: 'asset 2', value: 'asset 2'},
        {text: 'asset 3', value: 'asset 3'},
        {text: '...', value: '...'},
    ];

    return (
        <div>
            <Form>
                <Form.Select label={label || "[NO TEXT PROVIDED]"} options={options} placeholder="--"/>
            </Form>
            <br/>
            <span style={{fontSize: '0.85em'}}>
                * Dropdown items will be populated from SPM.
            </span>
        </div>
    );
};