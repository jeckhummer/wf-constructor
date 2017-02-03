import * as _ from "lodash";

export const reverseMapFromMap = (map, callback) => {
    callback = callback || _.identity;
    return _.transform(map, function (memo, value, key) {
        key = callback(key);
        memo[value] || (memo[value] = []);
        memo[value].push(key);
    }, {});
};