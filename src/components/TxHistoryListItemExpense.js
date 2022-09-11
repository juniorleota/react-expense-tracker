import React, {Component} from 'react';

class TxHistoryListItemExpense extends Component {
  render() {
    return (
        <div className={"row income"}>
          <span>{this.props.tx.description}</span>
          <span className={"amount"}>-{this.props.tx.amount}</span>
        </div>
    );
  }
}

export default TxHistoryListItemExpense;