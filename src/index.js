import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {App} from './dumb/App';
import {reducer} from './reducers/Reducer';
import thunk from 'redux-thunk';
import {Loader} from "semantic-ui-react";
import {parse} from "./parse";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
    <div>
        <Loader active size="large" content="Loading..."/>
    </div>,
    document.getElementById('root')
);

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

const initialState = parse(window.initialState);
initApp(initialState);