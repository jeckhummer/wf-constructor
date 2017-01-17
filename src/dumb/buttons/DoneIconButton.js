import React from 'react';
import {IconButton} from "./IconButton";


export class DoneIconButton extends React.Component{
    render() {
        return (
            <IconButton
                name="checkmark"
                tooltip="Save item changes"
                color="blue"
                onClick={this.props.onClick}
            />
        );
    }
}