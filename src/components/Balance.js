import React, {Component} from 'react';
import BalanceAmount from "./BalanceAmount";

class Balance extends Component {
  render() {
    return (
        <div>
          <h3 className={"balance-header"}>Balance</h3>
          <BalanceAmount/>
        </div>
    );
  }
}

export default Balance;