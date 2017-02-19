import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {};
};

const component = () => {
    return (
        <span> NO! </span>
    );
};

export const CustomFieldEditorActions = connect(mapStateToProps)(component);