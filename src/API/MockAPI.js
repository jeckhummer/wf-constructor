import {decorate} from "../utils/decorate";

const _API = {
};

const before = (_, method, args) =>
    console.log(`API method [${method}] called with arguments:`, ...args);

export const API = decorate(_API, before);