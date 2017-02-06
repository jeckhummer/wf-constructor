import React from 'react';
import {connect} from 'react-redux';
import {getPhaseRulerItems} from '../selectors/workflow';
import {List} from '../dumb/common/List';
import {EDITOR} from '../styles';
import {PhaseRulerItem} from "./PhaseRulerItem";

const mapStateToProps = (state) => {
    const items = getPhaseRulerItems(state).map(
        item => (
            <PhaseRulerItem
                id={item.id}
                size={item.size}
            />
        )
    );

    return {
        vertical: false,
        inner: true,
        border: EDITOR.BORDER,
        items: items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const PhaseRuler = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);