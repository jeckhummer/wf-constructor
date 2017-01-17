import React from 'react';
import {LabeledIconButton} from "./LabeledIconButton";

export class SaveButton extends React.Component{
    render() {
        return (
            <LabeledIconButton
                icon="save"
                color="green"
                {...this.props}
            />
        );
    }
}