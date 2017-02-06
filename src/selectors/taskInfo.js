import {createSelector} from "reselect";
import * as _ from "lodash";

export const getTaskInfo = state => state.entities.taskInfo;

export const getTaskInfoDictionary = createSelector(
    getTaskInfo,
    info => _.keyBy(info, 'id')
);