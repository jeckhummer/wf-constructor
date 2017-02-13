import React from 'react';
import {Form} from "semantic-ui-react";

export const TaskForm = ({
    name,
    parentOptions,
    parentId,
    teamOptions,
    teamId,
    phaseOptions,
    phaseId,
    approvalFlow,
    onAddTeam,
    onAddPhase,
    onNameChange,
    onPhaseChange,
    onTeamChange,
    onParentChange,
    onApprovalFlowChange
}) => {
    return (
        <Form>
            <Form.Input
                label='Name'
                onChange={(_, {value}) => onNameChange(value)}
                placeholder='Enter task name'
                value={name}
            />
            <Form.Group widths='equal'>
                <Form.Select
                    label='Phase'
                    placeholder='Select phase'
                    additionLabel='New phase: '
                    noResultsMessage="Type new phase name"
                    search
                    allowAdditions
                    selectOnBlur={false}
                    onChange={(_, {value}) => onPhaseChange(value)}
                    onAddItem={(_, {value}) => onAddPhase(value)}
                    options={phaseOptions}
                    value={phaseId || ''}
                />
                <Form.Select
                    label='Team'
                    placeholder='Select team'
                    additionLabel='New team: '
                    noResultsMessage="Type new team name"
                    search
                    allowAdditions
                    selectOnBlur={false}
                    onChange={(_, {value}) => onTeamChange(value)}
                    onAddItem={(_, {value}) => onAddTeam(value)}
                    options={teamOptions}
                    value={teamId || ''}
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Select
                    disabled={parentOptions.length === 1}
                    onChange={(_, {value}) => onParentChange(value === '0' ? null : value)}
                    search
                    label='Parent task'
                    options={parentOptions}
                    value={parentId || '0'}
                    placeholder='Select task'
                />
                <Form.Field>
                    <label>&nbsp;</label>
                    <Form.Checkbox
                        onChange={(_, {checked}) => onApprovalFlowChange(checked)}
                        label='Participates in Approval Flow'
                        checked={approvalFlow} />
                </Form.Field>
            </Form.Group>
        </Form>
    );
};