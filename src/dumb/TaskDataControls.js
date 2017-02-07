import React from 'react';
import {Form} from "semantic-ui-react";

export const TaskEditorControls = ({
    name,
    parentOptions,
    parentId,
    teamOptions,
    teamId,
    phaseOptions,
    phaseId,
    approvalFlow,
    onTaskChange
}) => {
    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Select
                    onChange={(_, {value}) => onTaskChange({ phaseId: value })}
                    search={true}
                    label='Phase'
                    options={phaseOptions}
                    value={phaseId || ''}
                    placeholder='Select phase'
                />
                <Form.Select
                    onChange={(_, {value}) => onTaskChange({ teamId: value })}
                    search={true}
                    label='Team'
                    options={teamOptions}
                    value={teamId || ''}
                    placeholder='Select team'
                />
            </Form.Group>
            <Form.Input
                label='Name'
                onChange={(_, {value}) => onTaskChange({ name: value })}
                placeholder='Enter task name'
                value={name}
            />
            <Form.Group widths='equal'>
                <Form.Select
                    onChange={(_, {value}) => onTaskChange({ parentId: value === '0' ? null : value })}
                    search={true}
                    label='Parent task'
                    options={parentOptions}
                    value={parentId || '0'}
                    placeholder='Select task'
                />
                <Form.Field>
                    <label>&nbsp;</label>
                    <Form.Checkbox
                        onChange={(_, {checked}) => onTaskChange({ approvalFlow: checked })}
                        label='Participates in Approval Flow'
                        checked={approvalFlow} />
                </Form.Field>
            </Form.Group>
        </Form>
    );
};