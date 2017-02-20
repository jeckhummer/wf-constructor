import {decorate} from "../utils/decorate";
import * as $ from "jquery";
import {customFieldMocks} from "../mocks";

const _API = {
    getCustomFields: (taskId) => {
        const deferred = $.Deferred();
        setTimeout(
            () => deferred.resolve(customFieldMocks),
            1 * 1000
        );
        return deferred.promise();
    }
};

const before = (_, method, args) =>
    console.log(`API method [${method}] called with arguments:`, ...args);

export const API = decorate(_API, before);