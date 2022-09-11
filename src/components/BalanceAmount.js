import React, {Component} from 'react';
import {calculateTxTotal} from "./TxGlobalState";

class BalanceAmount extends Component {
  render() {
    const totalBalanceAmount = calculateTxTotal();
    if (totalBalanceAmount < 0 ) {
      return <div className={"balance-amount negative"}>${totalBalanceAmount}</div>
    } else {
      return (
          <div className={"balance-amount positive"}>$+{totalBalanceAmount}</div>
      );
    }
  }
}

export default BalanceAmount;