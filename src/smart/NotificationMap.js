import React from 'react';
import {connect} from 'react-redux';
import {CheckboxMatrix} from "../dumb/block_graph/CheckboxMatrix";

const mapStateToProps = (state) => {
    return {
        map: {}
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const NotificationMap = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckboxMatrix);