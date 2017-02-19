import {connect} from 'react-redux';
import {EDITOR} from '../../styles';
import {getTeamsDictionary} from "../../selectors/teams";
import {ReadonlyRulerItem} from "../../dumb/coordinate_plane/ReadonlyRulerItem";

const mapStateToProps = (state, {id, size}) => {
    const item = getTeamsDictionary(state)[id];

    return {
        content: item.name,
        height: size,
        width: EDITOR.CORNER.WIDTH,
    };
};

export const ReadonlyWorkflowTeamRulerItem = connect(mapStateToProps)(ReadonlyRulerItem);