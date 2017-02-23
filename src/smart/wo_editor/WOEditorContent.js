import React from 'react';
import {connect} from 'react-redux';
import {WOEditorNotificationMap} from "./WOEditorNotificationMap";
import {WOCustomFieldManager} from "./WOCustomFieldManager";
import {getWOEditorState} from "../../selectors/ui";
import {WO_EDITOR_TABS} from "../../reducers/ui/WOEditor";

const mapStateToProps = (state) => {
    const {activeTab} = getWOEditorState(state);
    return {activeTab};
};

const component = ({activeTab}) => {
    const contentMap = {
        [WO_EDITOR_TABS.NOTIFICATIONS]: <WOEditorNotificationMap/>,
        [WO_EDITOR_TABS.CUSTOM_FIELDS]: <WOCustomFieldManager/>,
    };

    return contentMap[activeTab];
};

export const WOEditorContent = connect(mapStateToProps)(component);