import React from 'react';
import {Grid, Loader, Dimmer} from "semantic-ui-react";
import {CustomFieldPreview} from "./CustomFieldPreview";
import {CustomFieldList} from "./CustomFieldList";

export const CustomFieldManager = ({
    customFields,
    selectedCustomField,
    loading,
    onDeleteClick,
    onEditClick,
    onSelect,
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
                            : <CustomFieldList
                                customFields={customFields}
                                onDeleteClick={onDeleteClick}
                                onEditClick={onEditClick}
                                onSelect={onSelect}
                            />
                    }
                </Grid.Column>
                <Grid.Column only="computer" width={6}>
                    <CustomFieldPreview
                        selectedCustomField={selectedCustomField}
                        placeholder="Select field to see preview."
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};