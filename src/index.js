import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import {App} from './dumb/App';
import {reducer} from './reducers/reducer';
import thunk from 'redux-thunk';
import {Loader} from "semantic-ui-react";
// import {parse} from "./parse";
import {initialState} from './mocks';

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

// const initialState = parse(window.initialState);
initApp(initialState);
   /* {
    entities: {
        wo: {
            id: '7399',
            name: 'Super Duper Work Order!'
        },
        phases: [
            {
                id: '1',
                name: 'Flow Start',
                order: 1
            },
            {
                id: '2',
                name: 'Preparation',
                order: 2
            },
            {
                id: '3',
                name: 'Execution',
                order: 3
            },
            {
                id: '4',
                name: 'Flow End',
                order: 4
            }
        ],
        teams: [
            {
                id: '1',
                name: 'IPBB',
                order: 1
            },
            {
                id: '2',
                name: 'PS',
                order: 2
            },
            {
                id: '3',
                name: 'TX',
                order: 3
            },
            {
                id: '4',
                name: 'IT/Business',
                order: 4
            },
            {
                id: '5',
                name: 'Test',
                order: null
            }
        ],
        tasks: [
            {
                id: '1',
                name: 'Task 1',
                phaseId: '1',
                teamId: '3',
                parentId: null,
                statusId: '1',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            },
            {
                id: '2',
                name: 'Task 2',
                phaseId: '2',
                teamId: '1',
                parentId: null,
                statusId: '2',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            },
            {
                id: '3',
                name: 'Task 3',
                phaseId: '2',
                teamId: '1',
                parentId: '2',
                statusId: '3',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            },
            {
                id: '4',
                name: 'Task 4',
                phaseId: '2',
                teamId: '1',
                parentId: '3',
                statusId: '4',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            },
            {
                id: '5',
                name: 'Task 5',
                phaseId: '2',
                teamId: '1',
                parentId: null,
                statusId: '5',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            },
            {
                id: '6',
                name: 'Task 6',
                phaseId: '2',
                teamId: '2',
                parentId: null,
                statusId: '6',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            },
            {
                id: '7',
                name: 'Task 7',
                phaseId: '2',
                teamId: '2',
                parentId: '6',
                statusId: '1',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            },
            {
                id: '8',
                name: 'Task 8',
                phaseId: '2',
                teamId: '3',
                parentId: null,
                statusId: '2',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            },
            {
                id: '9',
                name: 'Task 9',
                phaseId: '3',
                teamId: '3',
                parentId: null,
                statusId: '3',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            },
            {
                id: '10',
                name: 'Task 10',
                phaseId: '3',
                teamId: '3',
                parentId: '9',
                statusId: '4',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            },
            {
                id: '11',
                name: 'Task 11',
                phaseId: '4',
                teamId: '4',
                parentId: null,
                statusId: '5',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            },
            {
                id: '12',
                name: 'Task 12',
                phaseId: '4',
                teamId: '4',
                parentId: '11',
                statusId: '6',
                approvalFlow: true,
                notificationMapNumber: '920350134'
            }
        ],
        statuses: [
            {
                id: '1',
                name: 'Completed'
            },
            {
                id: '2',
                name: 'Completed with failing point'
            },
            {
                id: '3',
                name: 'Pending'
            },
            {
                id: '4',
                name: 'Execution'
            },
            {
                id: '5',
                name: 'Failed'
            },
            {
                id: '6',
                name: 'On hold'
            }
        ]
    },
    cache: {
        taskCustomFields: {
            '3': [
                {
                    id: '1',
                    typeId: 'CKB',
                    data: {
                        label: 'test checkbox',
                        items: [
                            'option 1',
                            'option 2',
                            'option 3',
                            'option 4'
                        ]
                    }
                },
                {
                    id: '2',
                    typeId: 'RAD',
                    data: {
                        label: 'test radio button list',
                        items: [
                            'option 1',
                            'option 2',
                            'option 3',
                            'option 4',
                            'option 5'
                        ]
                    }
                },
                {
                    id: '3',
                    typeId: 'DRP',
                    data: {
                        label: 'test type selection',
                        items: [
                            'option 1',
                            'option 2',
                            'option 3',
                            'option 4'
                        ]
                    }
                },
                {
                    id: '4',
                    typeId: 'LNK',
                    data: {
                        label: 'test asset selection'
                    }
                },
                {
                    id: '5',
                    typeId: 'TXT',
                    data: {
                        label: 'test free text'
                    }
                },
                {
                    id: '6',
                    typeId: 'STR',
                    data: {
                        label: 'test text string'
                    }
                }
            ]
        }
    },
    ui: {
        taskEditor: {
            open: true,
            isNewTask: false,
            activeTab: 2,
            task: {
                id: '3',
                name: 'Task 3',
                approvalFlow: true,
                notificationMapNumber: '920350134',
                statusId: '3',
                parentId: '2',
                phaseId: '2',
                teamId: '1',
                childId: '4',
                isRoot: false,
                isLeaf: false
            },
            customFieldsLoading: false,
            customFields: [
                {
                    id: '1',
                    typeId: 'CKB',
                    data: {
                        label: 'test checkbox',
                        items: [
                            'option 1',
                            'option 2',
                            'option 3',
                            'option 4'
                        ]
                    }
                },
                {
                    id: '2',
                    typeId: 'RAD',
                    data: {
                        label: 'test radio button list',
                        items: [
                            'option 1',
                            'option 2',
                            'option 3',
                            'option 4',
                            'option 5'
                        ]
                    }
                },
                {
                    id: '3',
                    typeId: 'DRP',
                    data: {
                        label: 'test type selection',
                        items: [
                            'option 1',
                            'option 2',
                            'option 3',
                            'option 4'
                        ]
                    }
                },
                {
                    id: '4',
                    typeId: 'LNK',
                    data: {
                        label: 'test asset selection'
                    }
                },
                {
                    id: '5',
                    typeId: 'TXT',
                    data: {
                        label: 'test free text'
                    }
                },
                {
                    id: '6',
                    typeId: 'STR',
                    data: {
                        label: 'test text string'
                    }
                }
            ]
        },
        customFieldEditor: {
            open: true,
            isNewCustomField: false,
            customField: {
                id: '2',
                typeId: 'RAD',
                data: {
                    label: 'test radio button list',
                    items: [
                        'option 1',
                        'option 2',
                        'option 3',
                        'option 4',
                        'option 5'
                    ]
                }
            }
        },
        workflowEditor: {
            open: false
        },
        editMode: true
    }
});*/