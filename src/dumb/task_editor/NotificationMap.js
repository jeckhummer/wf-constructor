import React from 'react';
import {Table, Checkbox} from "semantic-ui-react";

export const NotificationMap = ({map, teams, statuses, onChange}) => {
    return (
        <Table definition>
            <Table.Header>
                <Table.Row textAlign='center'>
                    <Table.HeaderCell />
                    {
                        statuses.map((status, i) => (
                            <Table.HeaderCell key={i} content={status}/>
                        ))
                    }
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    teams.map((team, teamIndex) => (
                        <Table.Row textAlign='center' key={teamIndex}>
                            <Table.Cell content={team}/>
                            {
                                map[teamIndex].map((checked, statusIndex) => (
                                    <Table.Cell key={statusIndex}>
                                        <Checkbox
                                            checked={checked}
                                            onChange={(_, {checked}) => onChange(teamIndex, statusIndex, checked)}
                                        />
                                    </Table.Cell>
                                ))
                            }
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    );
};