import * as _ from "lodash";
import {createSelector} from "reselect";

const getRowPhases = state => state.entities.phases;

export const getPhases = createSelector(
    [getRowPhases],
    (phases) => {
        const orders = phases.map(phase => phase.order);
        const maxOrder = _.max(orders);
        const minOrder = _.min(orders);

        return phases.map(
            phase => ({
                ...phase,
                first: phase.order === minOrder,
                last: phase.order === maxOrder
            })
        );
    }
);

export const getSortedPhases = createSelector(
    [getPhases],
    phases => _.sortBy(phases, 'order')
);

export const getSortedPhasesIds = createSelector(
    [getSortedPhases],
    phases => phases.map(phase => phase.id)
);

export const getPhasesDictionary = createSelector(
    [getSortedPhases],
    phases => _.keyBy(phases, 'id')
);