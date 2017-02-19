import React from 'react';
import {Grid, Form} from "semantic-ui-react";
import {CustomFieldPreview} from "./CustomFieldPreview";
import {CustomFieldTypeSelect} from "../../smart/custom_field_editor/CustomFieldTypeSelect";
import {CUSTOM_FIELD_TYPES} from "../../constants";

export const CustomFieldForm = ({
    customField
}) => {
    const form = React.createElement(
        CUSTOM_FIELD_TYPES[customField.typeId].formTemplate,
        customField.data
    );

    return (
        <Grid celled='internally'>
            <Grid.Row>
                <Grid.Column
                    tablet={16}
                    computer={10}
                    style={{
                        paddingLeft: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                    }}>

                    <Form as="div">
                        <Form.Field>
                            <label>Type</label>
                            <CustomFieldTypeSelect/>
                        </Form.Field>
                        {form}
                    </Form>
                </Grid.Column>
                <Grid.Column
                    only="computer"
                    width={6}
                    style={{
                        paddingRight: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                    }}>

                    <CustomFieldPreview selectedCustomField={customField}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};