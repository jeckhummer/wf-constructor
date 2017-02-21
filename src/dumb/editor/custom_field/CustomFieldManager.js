import React from 'react';
import {Grid, Loader, Dimmer} from "semantic-ui-react";
import {CustomFieldPreview} from "./CustomFieldPreview";
import {CustomFieldList} from "./CustomFieldList";
import {AddButton} from "../../buttons/AddButton";
import {Clear} from "../../common/Clear";

export const CustomFieldManager = ({
    customFields,
    selectedCustomField,
    loading,
    onDeleteClick,
    onEditClick,
    onSelect,
    onAddClick
}) => {
    return (
        <Grid
            celled='internally'
            style={{height: 'calc(100% - 47px)'}}>
        <Grid.Row>
                <Grid.Column
                    tablet={16}
                    computer={10}
                    style={{
                        paddingLeft: '0px',
                        paddingTop: '0px',
                        paddingBottom: '0px',
                    }}>
                    {
                        loading
                            ? <div style={{height: '300px'}}>
                                <Dimmer active inverted>
                                    <Loader inverted content='Loading...' />
                                </Dimmer>
                            </div>
                            : <div>
                                <div style={{
                                    overflowY: 'auto',
                                    overflowX: 'hidden',
                                    maxHeight: '300px',
                                    marginBottom: '10px'
                                }}>
                                    {
                                        customFields && customFields.length
                                            ? <CustomFieldList
                                                customFields={customFields}
                                                onDeleteClick={onDeleteClick}
                                                onEditClick={onEditClick}
                                                onSelect={onSelect}
                                            />
                                            : <span style={{fontSize: '0.9em'}}>
                                            No custom fields.  Press "ADD CUSTOM FIELD" button below to add new custom field.
                                        </span>
                                    }
                                </div>
                                <Clear/>
                                <AddButton
                                    content="ADD CUSTOM FIELD"
                                    size="small"
                                    floated="right"
                                    onClick={onAddClick}/>
                            </div>
                    }
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
                        selectedCustomField={selectedCustomField}
                        placeholder="Select field to see preview."
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};