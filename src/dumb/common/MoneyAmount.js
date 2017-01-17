import React from 'react';
import * as accounting from 'accounting';
import {Currencies} from "../../entities/Currencies";
import {Space} from "./Space";

export const MoneyAmount = ({amount, currency, label}) => {
    const currencySymbol = Currencies[currency].getSymbol();
    const formatOptions = {
        symbol: currencySymbol,
        format: "%s %v",
        thousand: ","
    };
    const formattedAmount = accounting.formatMoney(amount, formatOptions);
    const space = label === undefined ? null : <Space x={2}/>;

    return (
        <span>
            {label} {space} {formattedAmount}
        </span>
    );
};