import React from 'react';
import {Modal, Icon, Menu} from "semantic-ui-react";
import {Floated} from "../common/Floated";
import {Uppercase} from "../common/Uppercase";
import {SaveButton} from "../buttons/SaveButton";
import {CancelButton} from "../buttons/CancelButton";

export const EditorModal = ({
    isActive,
    tabs,
    content,
    header,
    saveButtonDisabled,
    onCloseClick,
    onSaveClick,
    errorMessage,
    onTabClick
}) => {
    return (
        <Modal
            open={isActive}
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
                <div style={{
                    height: '411px',
                }}>
                    {
                        tabs
                            ? (
                                <Menu
                                    secondary={true}
                                    pointing={true}
                                    items={tabs}
                                    onItemClick={onTabClick}
                                />
                            )
                            : null
                    }
                    {content}
                </div>
            </Modal.Content>

            <Modal.Actions>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <div style={{flexGrow: '1', color: '#e33737'}}>
                        {errorMessage}
                    </div>
                    <div>
                        <CancelButton
                            content="CANCEL"
                            onClick={onCloseClick}
                        />
                        <SaveButton
                            content="SAVE"
                            onClick={onSaveClick}
                            disabled={saveButtonDisabled}
                        />
                    </div>
                </div>
            </Modal.Actions>

        </Modal>
    );
};