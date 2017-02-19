import {connect} from 'react-redux';
import {EditableRulerItem} from "../../dumb/coordinate_plane/EditableRulerItem";
import {EDITOR} from '../../styles';
import {getTeamsDictionary} from "../../selectors/teams";
import {moveTeamUp, moveTeamDown} from "../../actions/teams";

const mapStateToProps = (state, {id, size}) => {
    const item = getTeamsDictionary(state)[id];

    return {
        vertical: true,
        content: item.name,
        height: size,
        width: EDITOR.CORNER.WIDTH,
        first: item.first,
        last: item.last,
    };
};

const mapDispatchToProps = (dispatch, {id}) => {
    return {
        onPrevClick: () => dispatch(moveTeamUp(id)),
        onNextClick: () => dispatch(moveTeamDown(id)),
    };
};

export const EditableWorkflowTeamRulerItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditableRulerItem);