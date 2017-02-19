import {connect} from 'react-redux';
import {EditableRulerItem} from "../../dumb/coordinate_plane/EditableRulerItem";
import {EDITOR} from '../../styles';
import {getPhasesDictionary} from "../../selectors/phases";
import {movePhaseLeft, movePhaseRight} from "../../actions/phases";

const mapStateToProps = (state, {id, size}) => {
    const item = getPhasesDictionary(state)[id];

    return {
        vertical: false,
        content: item.name,
        width: size,
        height: EDITOR.CORNER.HEIGHT,
        first: item.first,
        last: item.last,
    };
};

const mapDispatchToProps = (dispatch, {id}) => {
    return {
        onPrevClick: () => dispatch(movePhaseLeft(id)),
        onNextClick: () => dispatch(movePhaseRight(id)),
    };
};

export const EditableWorkflowPhaseRulerItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditableRulerItem);