import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../../dumb/editor/EditorModal";
import {WOEditorAlerts} from "./WOEditorAlerts";
import {WOEditorHeader} from "./WOEditorHeader";
import {WOEditorTabs} from "./WOEditorTabs";
import {WOEditorContent} from "./WOEditorContent";
import {WOEditorActions} from "./WOEditorActions";

const mapStateToProps = (state) => {
    const {open} = getWOEditorState(state);

    return {
        isActive: open,
        header: <WOEditorHeader/>,
        tabs: <WOEditorTabs/>,
        content: <WOEditorContent/>,
        actions: <WOEditorActions/>,
        alert: <WOEditorAlerts/>
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseClick: () => dispatch(closeWOEditor())
    };
};

export const WOEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorModal);