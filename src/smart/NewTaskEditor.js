import {connect} from 'react-redux';
import {EditorModal} from "../dumb/EditorModal";
import {getNewTaskEditorState} from "../selectors/ui";
import {closeNewTaskEditor} from "../actions/newTaskEditor";

const mapStateToProps = (state) => {
    const windowState = getNewTaskEditorState(state);

    return {
        isActive: windowState.open,
        content: 'new task editor content',
        header: 'New Task'
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCloseClick: () => dispatch(closeNewTaskEditor())
    };
};

export const NewTaskEditor = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditorModal);