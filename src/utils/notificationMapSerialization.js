import * as _ from "lodash";

export function deserializeNotificationMap(number, columnCount, rowCount) {
    const numberBinaryRepresentation = (number >>> 0).toString(2);
    const digitCharArray = numberBinaryRepresentation.split('');
    const digitCharArrayWithTrailingZeroes = _.range(0, columnCount * rowCount - digitCharArray.length)
        .map(x => '0')
        .concat(digitCharArray);
    const boolArray = digitCharArrayWithTrailingZeroes.map(d => d === '1');
    const notificationMap = _.chunk(boolArray, columnCount);

    return notificationMap;
}

export function serializeNotificationMap(map) {
    const number = parseInt(_.flatten(map).map(x => x ? '1' : '0').join(''), 2) + '';
    return number;
}