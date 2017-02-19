import React from 'react';
import {connect} from 'react-redux';
import {getPhaseRulerItems} from '../../selectors/workflow';
import {List} from '../../dumb/common/List';
import {EDITOR} from '../../styles';
import {EditableWorkflowPhaseRulerItem} from "./EditableWorkflowPhaseRulerItem";
import {getEditMode} from "../../selectors/ui";
import {ReadonlyWorkflowPhaseRulerItem} from "./ReadonlyWorkflowPhaseRulerItem";

const mapStateToProps = (state) => {
    const editMode = getEditMode(state);
    const items = getPhaseRulerItems(state).map(
        item => (
            editMode
                ? <EditableWorkflowPhaseRulerItem
                    id={item.id}
                    size={item.size}
                />
                : <ReadonlyWorkflowPhaseRulerItem
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

export const WorkflowPhaseRuler = connect(mapStateToProps)(List);