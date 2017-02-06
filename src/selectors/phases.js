import * as _ from "lodash";
import {createSelector} from "reselect";

export const getPhases = (state) => {
    const orders = state.entities.phases.map(phase => phase.order);
    const maxOrder = _.max(orders);
    const minOrder = _.min(orders);

    return state.entities.phases.map(
        phase => ({
            ...phase,
            first: phase.order === minOrder,
            last: phase.order === maxOrder
        })
    );
};

export const getSortedPhases = createSelector(
    getPhases,
    phases => _.sortBy(phases, 'order')
);

export const getSortedPhasesIds = createSelector(
    getSortedPhases,
    sortedPhases => sortedPhases.map(phase => phase.id)
);

export const getPhasesDictionary = createSelector(
    getPhases,
    phases => _.keyBy(phases, 'id')
);