import React from 'react';
import {Modal, Icon} from "semantic-ui-react";
import {Floated} from "../common/Floated";
import {Uppercase} from "../common/Uppercase";

export const EditorModal = ({
    isActive,
    onCloseClick,
    tabs,
    content,
    header,
    actions,
    alert
}) => {
    return (
        <Modal
            open={isActive}
            size="small"
            onClose={onCloseClick}>

            <Modal.Header>
                <Floated right>
                    <Icon
                        link
                        onClick={onCloseClick}
                        name='close'>
                    </Icon>
                </Floated>
                <Uppercase>
                    {header}
                </Uppercase>
            </Modal.Header>

            <Modal.Content>
                {tabs}
                {content}
            </Modal.Content>

            <Modal.Actions>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <div style={{flexGrow: '1'}}>
                        {alert}
                    </div>
                    <div>
                        {actions}
                    </div>
                </div>
            </Modal.Actions>

        </Modal>
    );
};