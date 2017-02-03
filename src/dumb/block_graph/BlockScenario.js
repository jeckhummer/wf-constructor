import React from 'react';
import {BlockSequence} from "./BlockSequence";
import {TASK_SCENARIO} from "../../styles";
import {AddBlockCommandBlock} from "./AddBlockCommandBlock";

export const BlockScenario = ({ blockSequences }) => {
    return (
        <div style={{ padding: TASK_SCENARIO.PADDING }}>
            {
                blockSequences.map(
                    (sequence, key) => (
                        <div style={{paddingBottom: TASK_SCENARIO.PADDING}} key={key}>
                            <BlockSequence blocks={sequence}/>
                        </div>
                    )
                )
            }
            <AddBlockCommandBlock horizontal/>
        </div>
    );
};