import {connect} from 'react-redux';
import {EDITOR} from '../../styles';
import {getPhasesDictionary} from "../../selectors/phases";
import {ReadonlyRulerItem} from "../../dumb/coordinate_plane/ReadonlyRulerItem";

const mapStateToProps = (state, {id, size}) => {
    const item = getPhasesDictionary(state)[id];

    return {
        content: item.name,
        width: size,
        height: EDITOR.CORNER.HEIGHT,
    };
};

export const ReadonlyWorkflowPhaseRulerItem = connect(mapStateToProps)(ReadonlyRulerItem);