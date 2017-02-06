import {connect} from 'react-redux';
import {BlockGraph} from "../dumb/block_graph/BlockGraph";
import {styles} from '../styles';
import {getTasksRelationalDataDictionary, getTasksInfoDataDictionary} from "../selectors/tasks";
import {
    deleteTask,
    moveTaskLeft,
    moveTaskRight
} from '../actions/tasks';
import {openTaskEditor} from '../actions/taskEditor';

const mapStateToProps = (state, {items}) => {
    return {
        matrix: items.map(row => row.map(id => {
            const taskRelations = getTasksRelationalDataDictionary(state)[id];
            const taskInfo = getTasksInfoDataDictionary(state)[id];

            return {
                id,
                name: taskInfo.name,
                first: taskRelations.isRoot,
                last: taskRelations.isLeaf,
                ...(styles.statusColors[taskInfo.statusId])
            };
        }))
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPrevClickHandlerFactory: (id) => () => dispatch(moveTaskLeft(id)),
        onNextClickHandlerFactory: (id) => () => dispatch(moveTaskRight(id)),
        onSettingsClickHandlerFactory: (id) => () => dispatch(openTaskEditor(id)),
        onDeleteClickHandlerFactory: (id) => () => dispatch(deleteTask(id)),
    };
};

export const WorkflowBlock = connect(
    mapStateToProps,
    mapDispatchToProps
)(BlockGraph);