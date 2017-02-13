import React from 'react';
import {Modal, Icon} from "semantic-ui-react";
import {Floated} from "./common/Floated";
import {Clear} from "./common/Clear";

export const EditorModal = ({
    isActive,
    onCloseClick,
    tabs,
    content,
    header,
    actions
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
                {header}
            </Modal.Header>

            <Modal.Content>
                {tabs}
                <br/>
                {content}
            </Modal.Content>

            <Modal.Actions>
                <Floated right>
                    {actions}
                </Floated>
                <Clear/>
            </Modal.Actions>

        </Modal>
    );
};