import React from 'react';
import {Icon, Popup} from "semantic-ui-react";

export class IconButton extends React.Component{
    render() {
        const icon = (
            <Icon
                circular
                inverted
                disabled={this.props.disabled}
                name={this.props.name}
                link={!this.props.disabled}
                color={this.props.color}
                onClick={this.props.onClick}
            />
        );

        return (
            <Popup
                trigger={icon}
                content={this.props.tooltip}
                size="tiny"
                inverted
            />
        );
    }
}