import React, {Component} from 'react';
import TxHistoryListItem from "./TxHistoryListItem";

class TxHistoryList extends Component {
  constructor(props) {
    super(props);
    const testItem1 = {
      description: 'Expense Test',
      amount: 100,
      type: 'expense'
    }
    const testItem2 = {
      description: 'Income Test',
      amount: 100,
      type: 'income'
    }

    this.state = {
      txList: JSON.parse(localStorage.getItem("txList")) || [testItem1, testItem2]
    }
  }

  txRows() {
    return this.state.txList.map((tx) => <TxHistoryListItem tx={tx}/>);
  }

  render() {

    return (
        <div className={"table"}>
          {this.txRows()}
        </div>
    );
  }
}

export default TxHistoryList;