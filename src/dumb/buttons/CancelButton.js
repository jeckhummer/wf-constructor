import React from 'react';
import {LabeledIconButton} from "./LabeledIconButton";

export class AddButton extends React.Component{
    render() {
        return (
            <LabeledIconButton
                icon="plus"
                {...this.props}
            />
        );
    }
}