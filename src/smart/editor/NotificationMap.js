import React from 'react';
import {connect} from 'react-redux';
import {CheckboxMatrix} from "../../dumb/editor/CheckboxMatrix";
import {NotificationMapTeamRuler} from "../rulers/NotificationMapTeamRuler";
import {NotificationMapStatusRuler} from "../rulers/NotificationMapStatusRuler";

const mapStateToProps = (state) => {
    return {
        map: [
            [true, 0, true],
            [0, true, 0],
        ],
        contentHeight: '300px',
        contentWidth: '500px',
        hRulerContent: <NotificationMapStatusRuler/>,
        vRulerContent: <NotificationMapTeamRuler/>,
        cornerHeight: '4em',
        cornerWidth: '100px',
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const NotificationMap = connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckboxMatrix);