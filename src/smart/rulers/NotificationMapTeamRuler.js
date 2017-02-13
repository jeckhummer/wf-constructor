import React from 'react';
import {connect} from 'react-redux';
import {List} from '../../dumb/common/List';
import {getAllTeams} from "../../selectors/teams";

const mapStateToProps = (state) => {
    const items = getAllTeams(state).map(
        item => (
            <div style={{
                width: '100px',
                height: '2em',
                textAlign: 'right',
                padding: '5px',
            }}>
                {item.name}
            </div>
        )
    );

    return {
        vertical: true,
        borderless: true,
        items: items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const NotificationMapTeamRuler = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);