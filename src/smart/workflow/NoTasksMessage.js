import React from 'react';
import {COLORS} from '../../styles';
import {connect} from 'react-redux';
import {PlusButton} from "../../dumb/block_graph/PlusButton";
import {openTaskEditorForAdding} from "../../actions/taskEditor";
import {getEditMode} from "../../selectors/ui";

const component = ({editable, onClick}) => {
    return (
        <div style={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.3em',
            color: COLORS.PRIMARY
        }}>
            <h2>
                WORKFLOW IS EMPTY
            </h2>
            {!editable ? null :
                <div>
                    <br/>
                    <PlusButton onClick={onClick} size="huge"/>

                    <div style={{paddingTop: '5px'}}>
                        ADD TASK
                    </div>
                </div>
            }
        </div>
    );
};

function mapStateToProps(state) {
    return {
        editable: getEditMode(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onClick: () => dispatch(openTaskEditorForAdding())
    };
}

export const NoTasksMessage = connect(mapStateToProps, mapDispatchToProps)(component);