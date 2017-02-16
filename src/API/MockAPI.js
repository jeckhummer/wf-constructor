import {decorate} from "../utils/decorate";
import * as $ from "jquery";
import {customFieldsMocks} from "../mocks";

const _API = {
    getCustomFields: (taskId) => {
        const deferred = $.Deferred();
        setTimeout(
            () => deferred.resolve(customFieldsMocks),
            0 * 1000
        );
        return deferred.promise();
    }
};

const before = (_, method, args) =>
    console.log(`API method [${method}] called with arguments:`, ...args);

export const API = decorate(_API, before);