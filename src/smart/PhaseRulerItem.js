import {connect} from 'react-redux';
import {RulerItem} from "../dumb/coordinate_plane/RulerItem";
import {getPhasesDictionary} from '../selectors';
import {movePhaseLeft, movePhaseRight} from '../actions';
import {COLORS, EDITOR} from '../styles';

const mapStateToProps = (state, {id, size}) => {
    const item = getPhasesDictionary(state)[id];

    return {
        vertical: false,
        content: item.name,
        width: size,
        height: EDITOR.CORNER.HEIGHT,
        first: item.first,
        last: item.last,
        style: {
            backgroundColor: COLORS.PRIMARY_LIGHT,
            color: COLORS.PRIMARY,
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }
    };
};

const mapDispatchToProps = (dispatch, {id}) => {
    return {
        onPrevClick: () => dispatch(movePhaseLeft(id)),
        onNextClick: () => dispatch(movePhaseRight(id)),
    };
};

export const PhaseRulerItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(RulerItem);