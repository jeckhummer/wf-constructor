import React from 'react';
import {Table, Icon, Grid, Divider, Loader, Dimmer} from "semantic-ui-react";

export const CustomFieldsManager = ({
    fields,
    selectedCustomField,
    loading,
    onAddClick,
    onDeleteClick,
    onEditClick,
    onSelect
}) => {
    return (
        <Grid celled='internally'>
            <Grid.Row>
                <Grid.Column tablet={16} computer={10}>
                    {
                        loading
                            ? <Dimmer active inverted>
                                <Loader inverted content='Loading...' />
                            </Dimmer>
                            : <Table basic='very' selectable>
                                <Table.Body>
                                    {
                                        fields.map((field, key) =>
                                            <Table.Row key={key} onClick={() => onSelect(field)}>
                                                <Table.Cell>{field.data.label}</Table.Cell>
                                                <Table.Cell>{field.type.name}</Table.Cell>
                                                <Table.Cell>
                                                    <Icon name="pencil" color="blue" link/>
                                                    <Icon name="remove circle" color="red" fitted link/>
                                                </Table.Cell>
                                            </Table.Row>
                                        )
                                    }
                                </Table.Body>
                            </Table>
                    }
                </Grid.Column>
                <Grid.Column only="computer" width={6}>
                    Preview
                    <Divider />
                    {
                        selectedCustomField == null
                            ? <div>
                                Select field to see preview.
                            </div>
                            : React.createElement(
                                selectedCustomField.type.templateType,
                                selectedCustomField.data
                            )
                    }
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};