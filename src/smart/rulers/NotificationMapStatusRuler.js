import React from 'react';
import {connect} from 'react-redux';
import {List} from '../../dumb/common/List';
import {getStatuses} from '../../selectors/statuses';

const mapStateToProps = (state) => {
    const items = getStatuses(state).map(
        item => (
            <div style={{
                width: '100px',
                height: '4em',
                textAlign: 'center'
            }}>
                {item.name}
            </div>
        )
    );

    return {
        borderless: true,
        items: items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const NotificationMapStatusRuler = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);