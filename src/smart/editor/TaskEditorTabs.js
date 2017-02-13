import {connect} from 'react-redux';
import {openTaskEditorTab} from "../../actions/ui";
import {Menu} from "semantic-ui-react";
import {getTaskEditorState} from '../../selectors/ui';
import {TASK_EDITOR_TABS} from "../../reducers/ui/taskEditor";

const mapStateToProps = (state) => {
    const editorState = getTaskEditorState(state);
    const activeTab = editorState.activeTab;

    return {
        secondary: true,
        pointing: true,
        items: [
            {
                name: 'General',
                value: TASK_EDITOR_TABS.GENERAL,
                active: activeTab === TASK_EDITOR_TABS.GENERAL
            },
            {
                name: 'Custom fields',
                value: TASK_EDITOR_TABS.CUSTOM_FIELDS,
                active: activeTab === TASK_EDITOR_TABS.CUSTOM_FIELDS
            },
            {
                name: 'Notifications',
                value: TASK_EDITOR_TABS.NOTIFICATIONS,
                active: activeTab === TASK_EDITOR_TABS.NOTIFICATIONS,
            },
        ]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClick: (_, {value}) => dispatch(openTaskEditorTab(value))
    };
};

export const TaskEditorTabs = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);