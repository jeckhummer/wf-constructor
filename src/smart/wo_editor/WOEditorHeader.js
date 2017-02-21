import React from 'react';
import {getTaskEditorState} from "../../selectors/ui";
import {connect} from "react-redux";

export const component = ({header}) => {
   return (
       <span> {header} </span>
   );
};

export const mapStateToProps = (state) => {
    const {isNewTask, task} = getTaskEditorState(state);
    const header = isNewTask ? 'New task' : task.name;

    return {header};
};

export const WOEditorHeader = connect(mapStateToProps)(component);