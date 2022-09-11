import React, {Component} from 'react';
import TxHistoryListItemExpense from "./TxHistoryListItemExpense";
import TxHistoryListItemIncome from "./TxHistoryListItemIncome";

class TxHistoryListItem extends Component {
  render() {
    return (
        <>
          {this.getItemBasedOnType(this.props.tx)}
        </>
    );
  }

  getItemBasedOnType(tx) {
    if (tx.type === 'expense') {
      return <TxHistoryListItemExpense tx={tx}/>;
    } else if (tx.type === 'income') {
      return <TxHistoryListItemIncome tx={tx}/>;
    } else {
      return <></>;
    }
  }
}

export default TxHistoryListItem;