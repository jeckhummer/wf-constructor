import React from 'react';
import {connect} from 'react-redux';
import {getTeamRulerItems} from '../../selectors/workflow';
import {List} from '../../dumb/common/List';
import {EDITOR} from '../../styles';
import {TeamRulerItem} from "./TeamRulerItem";

const mapStateToProps = (state) => {
    const items = getTeamRulerItems(state).map(
        item => (
            <TeamRulerItem
                id={item.id}
                size={item.size}
            />
        )
    );

    return {
        vertical: true,
        inner: true,
        border: EDITOR.BORDER,
        items: items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const TeamRuler = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);