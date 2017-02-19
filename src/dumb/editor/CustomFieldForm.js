import React from 'react';
import {Grid, Form} from "semantic-ui-react";
import {CustomFieldPreview} from "./CustomFieldPreview";
import {CustomFieldTypeSelect} from "../../smart/custom_field_editor/CustomFieldTypeSelect";

export const CustomFieldForm = ({
    customField,
}) => {
    return (
        <Grid celled='internally'>
            <Grid.Row>
                <Grid.Column tablet={16} computer={10}>
                    <Form>
                        <Form.Field>
                            <label>Type</label>
                            <CustomFieldTypeSelect/>
                        </Form.Field>
                    </Form>
                    {
                        JSON.stringify(customField)
                    }
                </Grid.Column>
                <Grid.Column only="computer" width={6}>
                    <CustomFieldPreview selectedCustomField={customField}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};