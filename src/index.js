import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {App} from './smart/App';
import {reducer} from './reducers/reducer';
import thunk from 'redux-thunk';
// import {parse} from "./parse";
import {initialState} from './mocks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function initApp(state){
    const store = createStore(
        reducer,
        state,
        composeEnhancers(
            applyMiddleware(
                thunk
                // ,ServerStateSaver
            )
        )
    );

    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        document.getElementById('root')
    );
}

// const initialState = parse(window.initialState);
initApp(initialState);
// initApp();