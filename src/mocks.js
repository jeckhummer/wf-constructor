export const initialState = {
    entities: {
        phases: [
            { id: '1', name: 'Flow Start', order: 1 },
            { id: '2', name: 'Preparation', order: 2 },
            { id: '3', name: 'Execution', order: 3 },
            { id: '4', name: 'Flow End', order: 4 }
        ],
        teams: [
            { id: '1', name: 'IPBB', order: 1 },
            { id: '2', name: 'PS', order: 2 },
            { id: '3', name: 'TX', order: 3 },
            { id: '4', name: 'IT/Business', order: 4 },
        ],
        tasks: [
            { id: '1', name: 'Task 1', approvalFlow: true, statusId: '1', phaseId: '1', teamId: '3', parentId: null, notificationMap: '85'},
            { id: '2', name: 'Task2 asdasd asasd asdasd asasdasdas asdasdasdas asdasdas asdasdasdas', approvalFlow: true, statusId: '2', phaseId: '2', teamId: '1', parentId: null, notificationMap: '85'},
            { id: '3', name: 'Task 3', approvalFlow: true, statusId: '3', phaseId: '2', teamId: '1', parentId: '2', notificationMap: '85'},
            { id: '4', name: 'Task 4', approvalFlow: true, statusId: '4', phaseId: '2', teamId: '1', parentId: '3', notificationMap: '85'},
            { id: '5', name: 'Task 5', approvalFlow: true, statusId: '5', phaseId: '2', teamId: '1', parentId: null, notificationMap: '85'},
            { id: '6', name: 'Task 6', approvalFlow: true, statusId: '6', phaseId: '2', teamId: '2', parentId: null, notificationMap: '85'},
            { id: '7', name: 'Task 7', approvalFlow: true, statusId: '1', phaseId: '2', teamId: '2', parentId: '6', notificationMap: '85'},
            { id: '8', name: 'Task 8', approvalFlow: true, statusId: '2', phaseId: '2', teamId: '3', parentId: null, notificationMap: '85'},
            { id: '9', name: 'Task 9', approvalFlow: true, statusId: '3', phaseId: '3', teamId: '3', parentId: null, notificationMap: '85'},
            { id: '10', name: 'Task 10', approvalFlow: true, statusId: '4', phaseId: '3', teamId: '3', parentId: '9', notificationMap: '85'},
            { id: '11', name: 'Task 11', approvalFlow: true, statusId: '5', phaseId: '4', teamId: '4', parentId: null, notificationMap: '85'},
            { id: '12', name: 'Task 12', approvalFlow: true, statusId: '6', phaseId: '4', teamId: '4', parentId: '11', notificationMap: '85'}
        ],
        statuses: [
            { id: '1', name: 'Completed' },
            { id: '2', name: 'Completed with failing point' },
            { id: '3', name: 'Pending' },
            { id: '4', name: 'Execution' },
            { id: '5', name: 'Failed' },
            { id: '6', name: 'On hold' },
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
    }
};