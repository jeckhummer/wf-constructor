import React from 'react';
import {Button} from 'semantic-ui-react';

export class LabeledIconButton extends React.Component{
    render() {
        return (
            <Button
                labelPosition='left'
                {...this.props}
            />
        );
    }
}