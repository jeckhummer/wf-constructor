import React from 'react';
import {IconButton} from "./IconButton";


export class EditIconButton extends React.Component{
    render() {
        return (
            <IconButton
                name="pencil"
                tooltip="Edit item"
                color="blue"
                onClick={this.props.onClick}
            />
        );
    }
}