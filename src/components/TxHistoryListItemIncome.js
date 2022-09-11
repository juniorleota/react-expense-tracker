import React, {Component} from 'react';

class TxHistoryListItemIncome extends Component {
  render() {
    return (
        <div className={"row expense"}>
          <span>{this.props.tx.description}</span>
          <span className={"amount"}>+{this.props.tx.amount}</span>
        </div>
    );
  }
}

export default TxHistoryListItemIncome;