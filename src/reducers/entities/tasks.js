import {SET_TASK_PARENT, DELETE_TASK} from '../../actions';

export const tasks = (state = [], action) => {
    switch (action.type) {
        case SET_TASK_PARENT:
            return changeTaskParent(state, action.id, action.parentId);
        case DELETE_TASK:
            return deleteTask(state, action.id);
        default:
            return state;
    }
};

function changeTaskParent(state, id, parentId) {
    return state.map(
        task => ({
            ...task,
            parentId: task.id === id ? parentId : task.parentId
        })
    );
}

function deleteTask(state, id) {
    return state.filter(task => task.id !== id);
}