import React from 'react';
import {IconButton} from "./IconButton";


export class RemoveIconButton extends React.Component{
    render() {
        return (
            <IconButton
                name="remove"
                color="red"
                tooltip="Remove item"
                onClick={this.props.onClick}
            />
        );
    }
}