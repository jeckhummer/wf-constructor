import {connect} from 'react-redux';
import {NotificationMap} from "../../dumb/editor/NotificationMap";
import {getStatuses} from "../../selectors/statuses";
import {getAllTeams} from "../../selectors/teams";
import {getTaskEditorState} from "../../selectors/ui";
import {updateTaskEditorTask} from "../../actions/taskEditor";
import {deserializeNotificationMap, serializeNotificationMap} from "../../utils/notificationMapSerialization";

const mapStateToProps = (state) => {
    const statuses = getStatuses(state).map(x => x.name);
    const teams = getAllTeams(state).map(x => x.name);

    const notificationMapNumber = getTaskEditorState(state).task.notificationMapNumber;
    const notificationMap = deserializeNotificationMap(notificationMapNumber, statuses.length, teams.length);

    return {
        map: notificationMap,
        number: notificationMapNumber,
        statuses,
        teams,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateNotificationMapNumber: (number) => dispatch(updateTaskEditorTask({notificationMapNumber: number}))
    };
};

function mergeProps(stateProps, dispatchProps) {
    return {
        map: stateProps.map,
        statuses: stateProps.statuses,
        teams: stateProps.teams,
        onChange: (teamIndex, statusIndex) => {
            const newMap = stateProps.map.map(
                (row, i) => row.map(
                    (cell, j) => i === teamIndex && j === statusIndex ? !cell : cell
                )
            );
            const number = serializeNotificationMap(newMap);

            dispatchProps.updateNotificationMapNumber(number);
        }
    };
}

export const TaskEditorNotificationMap = connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(NotificationMap);