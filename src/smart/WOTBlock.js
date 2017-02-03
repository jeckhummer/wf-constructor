import {connect} from 'react-redux';
import {getTasksDictionary} from '../selectors';
import {moveTaskLeft, moveTaskRight, deleteTask} from '../actions';
import {TaskBlock} from "../dumb/block_graph/TaskBlock";
import {styles} from "../styles";

const mapStateToProps = (state, {id}) => {
    const item = getTasksDictionary(state)[id];

    return {
        name: item.name,
        first: item.isRoot,
        last: item.isLeaf,
        ...styles.statusColors[item.statusId]
    };
};

const mapDispatchToProps = (dispatch, {id}) => {
    return {
        onPrevClick: () => dispatch(moveTaskLeft(id)),
        onNextClick: () => dispatch(moveTaskRight(id)),
        onDeleteClick: () => dispatch(deleteTask(id))
    };
};

export const WOTBlock = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskBlock);