import {DELETE_TASK, UPDATE_TASK, ADD_NEW_TASK} from '../../actions/tasks';

export const tasks = (state = [], action) => {
    switch (action.type) {
        case DELETE_TASK:
            return deleteTask(state, action.id);
        case UPDATE_TASK:
            return updateTask(state, action.id, action.diff);
        case ADD_NEW_TASK:
            return addNewTask(state, action.task);
        default:
            return state;
    }
};

function deleteTask(state, id) {
    return state.filter(task => task.id !== id);
}

function updateTask(state, id, diff) {
    return state.map(
        task => task.id === id ? { ...task, ...diff } : task
    );
}

function addNewTask(state, task) {
    return state.concat([task]);
}
