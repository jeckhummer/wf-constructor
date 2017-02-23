import {connect} from 'react-redux';
import {getTasksInfoDataDictionary} from "../../selectors/tasks";
import {ReadonlyBlockGraph} from "../../dumb/block_graph/ReadonlyBlockGraph";
import {generateWOTLink} from '../../utils/WOTLinkGeneration';
import {getWO} from "../../selectors/WO";

const mapStateToProps = (state, {items}) => {
    return {
        matrix: items.map(row => row.map(id => {
            const taskInfo = getTasksInfoDataDictionary(state)[id];
            const wo = getWO(state);
            const link = generateWOTLink(taskInfo.id, wo.id);

            return {
                id,
                statusId: taskInfo.statusId,
                name: taskInfo.name,
                link
            };
        }))
    };
};

export const ReadonlyWorkflowBlock = connect(mapStateToProps)(ReadonlyBlockGraph);