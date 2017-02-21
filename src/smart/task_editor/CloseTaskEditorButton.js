import {connect} from 'react-redux';
import {closeTaskEditor} from "../../actions/taskEditor";
import {CancelButton} from "../../dumb/buttons/CancelButton";

const mapStateToProps = (state) => {
    return {
        content: "CANCEL",
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(closeTaskEditor());
        }
    };
};

export const CloseTaskEditorButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(CancelButton);