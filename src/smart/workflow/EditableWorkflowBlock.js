import {connect} from 'react-redux';
import {EditableBlockGraph} from "../../dumb/block_graph/EditableBlockGraph";
import {getTasksRelationalDataDictionary, getTasksInfoDataDictionary} from "../../selectors/tasks";
import {
    moveTaskLeft,
    moveTaskRight,
    deleteTask
} from "../../actions/tasks";
import {openTaskEditorForEdit, openTaskEditorForAdding} from "../../actions/ui";

const mapStateToProps = (state, {items, phaseId, teamId}) => {
    return {
        phaseId,
        teamId,
        matrix: items.map(row => row.map(id => {
            const taskRelations = getTasksRelationalDataDictionary(state)[id];
            const taskInfo = getTasksInfoDataDictionary(state)[id];

            return {
                id,
                phaseId: taskRelations.phaseId,
                teamId: taskRelations.teamId,
                name: taskInfo.name,
                first: taskRelations.isRoot,
                last: taskRelations.isLeaf,
            };
        }))
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPrevClick: (id) => dispatch(moveTaskLeft(id)),
        onNextClick: (id) => dispatch(moveTaskRight(id)),
        onEditClick: (task) => dispatch(openTaskEditorForEdit(task)),
        onDeleteClick: (id) => dispatch(deleteTask(id)),
        onAddClick: (task) => dispatch(openTaskEditorForAdding(task)),
    };
};

const mergeProps = (stateProps, dispatchProps) => {
    const newRootTask = {
        teamId: stateProps.teamId,
        phaseId: stateProps.phaseId,
    };

    return {
        onRootAddClick: () => dispatchProps.onAddClick(newRootTask),
        editMode: stateProps.editMode,
        matrix: stateProps.matrix.map(row =>
            row.map(item => {
                const newTaskAfterCurrent = {
                    ...newRootTask,
                    parentId: item.id,
                };

                return {
                    ...item,
                    onPrevClick: () => dispatchProps.onPrevClick(item.id),
                    onNextClick: () => dispatchProps.onNextClick(item.id),
                    onEditClick: () => dispatchProps.onEditClick(item.id),
                    onDeleteClick: () => dispatchProps.onDeleteClick(item.id),
                    onAddAfterCurrentClick: () => dispatchProps.onAddClick(newTaskAfterCurrent),
                };
            })
        )
    };
};

export const EditableWorkflowBlock = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(EditableBlockGraph);