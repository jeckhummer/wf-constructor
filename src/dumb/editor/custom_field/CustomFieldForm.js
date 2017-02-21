import React from 'react';
import {Grid, Form} from "semantic-ui-react";
import {CustomFieldPreview} from "./CustomFieldPreview";
import {CustomFieldTypeSelect} from "./CustomFieldTypeSelect";
import {CUSTOM_FIELD_TYPES} from "../../../constants";

export const CustomFieldForm = ({
    customField,
    onTypeChange,
    onDataChange
}) => {
    const form = CUSTOM_FIELD_TYPES[customField.typeId] !== undefined
        ? React.createElement(
            CUSTOM_FIELD_TYPES[customField.typeId].formTemplate,
            {
                ...customField.data,
                update: onDataChange
            }
        )
        : null;

    return (
        <Grid
            celled='internally'
            style={{height: '100%'}}>

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
                            <CustomFieldTypeSelect
                                selectedTypeId={customField.typeId}
                                onChange={onTypeChange}
                            />
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

                    <CustomFieldPreview
                        selectedCustomField={customField}
                        placeholder="Select field type to see preview."
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};