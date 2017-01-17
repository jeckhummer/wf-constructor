import React from 'react';
import {UOMList} from '../../entities/UOM';
import {Dropdown} from 'semantic-ui-react';

export class UOMSelect extends React.Component {
    onSelectedUOMChange(e, {value}) {
        this.props.onChange(value);
    }

    render() {
        const options = UOMList
            .map(uom => {
                return {
                    text: uom,
                    value: uom
                };
            });

        return(
            <Dropdown
                compact={this.props.width !== undefined}
                style={{width: this.props.width}}
                defaultValue={this.props.selectedUOM}
                selection
                onChange={this.onSelectedUOMChange.bind(this)}
                options={options}
            />
        );
    }
}