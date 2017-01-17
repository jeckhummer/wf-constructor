import React from 'react';
import {CurrencyList} from '../../entities/Currencies';
import {Dropdown} from 'semantic-ui-react';

export class CurrencySelect extends React.Component {
    onSelectedCurrencyChange(e, {value}) {
        this.props.onChange(value);
    }

    render() {
        const options = CurrencyList
            .map(currency => {
                return {
                    text: currency.getNameWithSymbol(),
                    value: currency.getName()
                };
            });

        return(
            <Dropdown
                defaultValue={this.props.selectedCurrency.getName()}
                selection
                onChange={this.onSelectedCurrencyChange.bind(this)}
                options={options}
            />
        );
    }
}