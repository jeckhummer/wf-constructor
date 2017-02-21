import React from 'react';
import {Icon} from "semantic-ui-react";

export const CustomFieldList = ({
    customFields,
    onDeleteClick,
    onEditClick,
    onSelect
}) => {
    return (
        <div>
            {
                customFields.map((field, key) =>
                    <div
                        key={key}
                        onClick={() => onSelect(field.id)}
                        className="hover"
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'row',
                            lineHeight: '1em'
                        }}>

                        <div style={{
                            flexGrow: '1',
                            padding: '8px 0px 5px 8px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            borderBottom: key === customFields.length - 1 ? 'none' : '1px solid #dedede'
                        }}>
                            {field.data.label}
                        </div>

                        <div
                            style={{
                                flexGrow: '0',
                                fontSize: '1.3em',
                                padding: '8px 8px 5px 4px',
                                whiteSpace: 'nowrap',
                                borderBottom: key === customFields.length - 1 ? 'none' : '1px solid #dedede'
                            }}>

                            <span className="visible-on-hover">
                                <Icon
                                    onClick={(e) => {
                                        onEditClick(field.id);
                                        e.stopPropagation();
                                    }}
                                    name="pencil"
                                    color="blue"
                                    link
                                />
                                <Icon
                                    onClick={(e) => {
                                        onDeleteClick(field.id);
                                        e.stopPropagation();
                                    }}
                                    name="remove circle"
                                    color="red"
                                    fitted
                                    link
                                />
                            </span>
                        </div>

                    </div>
                )
            }
        </div>
    );
};