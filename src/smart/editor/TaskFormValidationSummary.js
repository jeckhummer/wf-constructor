import React from 'react';
import {connect} from 'react-redux';
import {Message} from "semantic-ui-react";

function mapStateToProps(state) {
    return {
        content: 'you have errors!',
        negative: true,
        size: 'small'
    };
}

export const ValidationSummary = connect(mapStateToProps)(Message);