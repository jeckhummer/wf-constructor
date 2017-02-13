import React from 'react';
import {connect} from 'react-redux';
import {getPhaseRulerItems} from '../../selectors/workflow';
import {List} from '../../dumb/common/List';
import {EDITOR} from '../../styles';
import {WorkflowPhaseRulerItem} from "./WorkflowPhaseRulerItem";

const mapStateToProps = (state) => {
    const items = getPhaseRulerItems(state).map(
        item => (
            <WorkflowPhaseRulerItem
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

export const WorkflowPhaseRuler = connect(
    mapStateToProps,
    mapDispatchToProps
)(List);