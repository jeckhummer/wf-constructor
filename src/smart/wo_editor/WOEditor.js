import React from 'react';
import {connect} from 'react-redux';
import {EditorModal} from "../../dumb/editor/EditorModal";
import {WOEditorContent} from "./WOEditorContent";
import {getWOEditorState} from "../../selectors/ui";
import {getWO} from "../../selectors/WO";
import {WO_EDITOR_TABS} from "../../reducers/ui/WOEditor";
import {closeWOEditor, openWOEditorTab} from "../../actions/WOEditor";
import {saveWOFromEditor} from "../../actions/WO";

const mapStateToProps = (state) => {
    const {name} = getWO(state);
    const {activeTab} = getWOEditorState(state);

    const tabs = [
        {
            name: 'Custom fields',
            value: WO_EDITOR_TABS.CUSTOM_FIELDS,
            active: activeTab === WO_EDITOR_TABS.CUSTOM_FIELDS
        },
        {
            name: 'Notifications',
            value: WO_EDITOR_TABS.NOTIFICATIONS,
            active: activeTab === WO_EDITOR_TABS.NOTIFICATIONS,
        },
    ];

    return {
        isActive: true,
        header: name,
        content: <WOEditorContent/>,
        saveButtonDisabled: false,
        errorMessage: null,
        tabs
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSaveClick: () => {
            dispatch(saveWOFromEditor());
            dispatch(closeWOEditor());
        },
        onCloseClick: () => dispatch(closeWOEditor()),
        onTabClick: (_, {value}) => dispatch(openWOEditorTab(value))
    };
};

export const WOEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorModal);