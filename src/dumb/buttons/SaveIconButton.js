import React from 'react';
import {IconButton} from "./IconButton";


export class SaveIconButton extends React.Component{
    render() {
        return (
            <IconButton
                disabled={this.props.disabled}
                name="save"
                tooltip="Save item"
                color="green"
                onClick={this.props.onClick}
            />
        );
    }
}