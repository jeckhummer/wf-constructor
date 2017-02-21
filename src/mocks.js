import {CUSTOM_FIELD_TYPE_IDS} from './constants';

const noPhases = false;
const noTeams = false;
const noTasks = false;
const nothing = false;

export const initialState = {
    entities: {
        wo: {
            id: '7399',
            name: 'Super Duper Work Order!',
            notificationMap: '920350134',
        },
        phases: !nothing && !noPhases ? [
            {id: '1', name: 'Flow Start', order: 1},
            {id: '2', name: 'Preparation', order: 2},
            {id: '3', name: 'Execution', order: 3},
            {id: '4', name: 'Flow End', order: 4}
        ] : [],
        teams: !nothing && !noTeams ? [
            {id: '1', name: 'IPBB', order: 1},
            {id: '2', name: 'PS', order: 2},
            {id: '3', name: 'TX', order: 3},
            {id: '4', name: 'IT/Business', order: 4},
            {id: '5', name: 'Test', order: null}, // null если нет order
        ] : [],
        tasks: !nothing && !noTasks ? [
            {
                id: '1',
                name: 'Task 1',
                phaseId: '1',
                teamId: '3',
                parentId: null,
                statusId: '1',
                approvalFlow: true,
                notificationMapNumber: '920350134',
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
            },
        ] : [],
        statuses: [
            {id: '1', name: 'Completed'},
            {id: '2', name: 'Completed with failing point'},
            {id: '3', name: 'Pending'},
            {id: '4', name: 'Execution'},
            {id: '5', name: 'Failed'},
            {id: '6', name: 'On hold'},
        ],
    },
    cache: {
        taskCustomFields: {},
        WOCustomFields: []
    },
    ui: {
        taskEditor: {
            open: false,
            isNewTask: false,
            activeTab: 1,
            task: {},
            selectedCustomFieldId: null,
            customFieldsLoading: false,
            customFields: []
        },
        customFieldEditor: {
            open: false,
            isNewCustomField: false,
            customField: {}
        },
        workflowEditor: {
            open: false
        },
        editMode: true
    }
};

export const customFieldMocks = [
    {
        id: '1',
        typeId: CUSTOM_FIELD_TYPE_IDS.CHECKBOX_LIST,
        data: {
            label: 'test checkbox',
            items: [
                'option 1',
                'option 2',
                'option 3',
                'option 4',
            ]
        }
    },
    {
        id: '2',
        typeId: CUSTOM_FIELD_TYPE_IDS.RADIO_BUTTON_LIST,
        data: {
            label: 'test radio button list',
            items: [
                'option 1',
                'option 2',
                'option 3',
                'option 4',
                'option 5',
            ]
        }
    },
    {
        id: '3',
        typeId: CUSTOM_FIELD_TYPE_IDS.TYPE_SELECTION,
        data: {
            label: 'test type selection',
            items: [
                'option 1',
                'option 2',
                'option 3',
                'option 4',
            ]
        }
    },
    {
        id: '4',
        typeId: CUSTOM_FIELD_TYPE_IDS.ASSET_SELECTION,
        data: {
            label: 'test asset selection'
        }
    },
    {
        id: '5',
        typeId: CUSTOM_FIELD_TYPE_IDS.FREE_TEXT,
        data: {
            label: 'test free text'
        }
    },
    {
        id: '6',
        typeId: CUSTOM_FIELD_TYPE_IDS.TEXT_STRING,
        data: {
            label: 'test text string'
        }
    }
];