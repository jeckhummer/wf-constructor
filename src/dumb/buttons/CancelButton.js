import React from 'react';
import {LabeledIconButton} from "./LabeledIconButton";

export class CancelButton extends React.Component{
    render() {
        return (
            <LabeledIconButton
                icon="remove"
                {...this.props}
            />
        );
    }
}