export const initialState = {
    entities: {
        phases: true ? [
            {id: '1', name: 'Flow Start', order: 1},
            {id: '2', name: 'Preparation', order: 2},
            {id: '3', name: 'Execution', order: 3},
            {id: '4', name: 'Flow End', order: 4}
        ] : [],
        teams: true ? [
            {id: '1', name: 'IPBB', order: 1},
            {id: '2', name: 'PS', order: 2},
            {id: '3', name: 'TX', order: 3},
            {id: '4', name: 'IT/Business', order: 4},
            {id: '5', name: 'Test', order: null}, // null если нет order
        ] : [],
        tasks: true ? [
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
    relations: {
        taskCustomFields: {
            '1': null,
            '2': null,
            '3': null,
            '4': null,
            '5': null,
            '6': null,
            '7': null,
            '8': null,
            '9': null,
            '10': null,
            '11': null
        }
    },
    ui: {
        taskEditor: {
            open: false,
            isNewTask: false,
            activeTab: 3,
            task: {},
            valid: true
        },
        workflowEditor: {
            open: false
        },
        editMode: true
    }
};