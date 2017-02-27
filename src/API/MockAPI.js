import {decorate} from "../utils/decorate";
import * as $ from "jquery";
import {customFieldMocks} from "../mocks";

const _API = {
    getTaskCustomFields: (taskId) => {
        const deferred = $.Deferred();
        setTimeout(
            () => deferred.resolve(customFieldMocks),
            2 * 1000
        );
        return deferred.promise();
    },
    getWOCustomFields: (WOID) => {
        const deferred = $.Deferred();
        setTimeout(
            () => deferred.resolve(customFieldMocks),
            2 * 1000
        );
        return deferred.promise();
    }
};

const before = (_, method, args) =>
    console.log(`API method [${method}] called with arguments:`, ...args);

export const API = decorate(_API, before);