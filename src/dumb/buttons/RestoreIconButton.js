import React from 'react';
import {IconButton} from "./IconButton";


export class RestoreIconButton extends React.Component{
    render() {
        return (
            <IconButton
                name="undo"
                tooltip="Restore item"
                color="orange"
                onClick={this.props.onClick}
            />
        );
    }
}