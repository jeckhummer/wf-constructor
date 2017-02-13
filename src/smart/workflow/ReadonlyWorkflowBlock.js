import {connect} from 'react-redux';
import {TASK_BLOCK} from '../../styles';
import {getTasksInfoDataDictionary} from "../../selectors/tasks";
import {ReadonlyBlockGraph} from "../../dumb/block_graph/ReadonlyBlockGraph";

const mapStateToProps = (state, {items}) => {
    return {
        matrix: items.map(row => row.map(id => {
            const taskInfo = getTasksInfoDataDictionary(state)[id];

            return {
                id,
                statusId: taskInfo.statusId,
                name: taskInfo.name,
                ...TASK_BLOCK.COLORS
            };
        }))
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const ReadonlyWorkflowBlock = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ReadonlyBlockGraph);