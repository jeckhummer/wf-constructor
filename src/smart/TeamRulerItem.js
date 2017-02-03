import {connect} from 'react-redux';
import {RulerItem} from "../dumb/coordinate_plane/RulerItem";
import {getTeamsDictionary} from '../selectors';
import {moveTeamDown, moveTeamUp} from '../actions';
import {COLORS, EDITOR} from '../styles';

const mapStateToProps = (state, {id, size}) => {
    const item = getTeamsDictionary(state)[id];

    return {
        vertical: true,
        content: item.name,
        height: size,
        width: EDITOR.CORNER.WIDTH,
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
        onPrevClick: () => dispatch(moveTeamUp(id)),
        onNextClick: () => dispatch(moveTeamDown(id)),
    };
};

export const TeamRulerItem = connect(
    mapStateToProps,
    mapDispatchToProps
)(RulerItem);