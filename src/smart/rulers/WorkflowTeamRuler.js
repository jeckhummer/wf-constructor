import React from 'react';
import {connect} from 'react-redux';
import {getTeamRulerItems} from '../../selectors/workflow';
import {List} from '../../dumb/common/List';
import {EDITOR} from '../../styles';
import {EditableWorkflowTeamRulerItem} from "./EditableWorkflowTeamRulerItem";
import {getEditMode} from "../../selectors/ui";
import {ReadonlyWorkflowTeamRulerItem} from "./ReadonlyWorkflowTeamRulerItem";

const mapStateToProps = (state) => {
    const editMode = getEditMode(state);
    const items = getTeamRulerItems(state).map(
        item => (
            editMode
                ? <EditableWorkflowTeamRulerItem
                    id={item.id}
                    size={item.size}
                />
                : <ReadonlyWorkflowTeamRulerItem
                    id={item.id}
                    size={item.size}
                />
        )
    );

    return {
        vertical: true,
        inner: true,
        border: EDITOR.BORDER,
        items: items,
    };
};

export const WorkflowTeamRuler = connect(mapStateToProps)(List);